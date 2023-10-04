<template>
  <div v-if="this.cart" class="paymentDiv">
    <table v-if="!this.paid" class="notPaid">
      <td class="buttons">
        <div class="discount">
           <label for="discountCode" class="label">Discount Code:</label>
           <input id="discountCode" type="text" class="input" @change="discountCheckChange($event)"/>
           <span class="valid hidden" id="valid">Discount Code Valid</span>
           <span class="invalid hidden" id="invalid">Discount Code Invalid</span>
           <p class="discountSaleDiscliamer" v-if="this.onSale">This Item is currently on sale, discount code will not apply to this item</p>
        </div>
        <div id="paypal-button-container"></div>
      </td>
      <td class="previewDiv">
        <div class="preview">
          <p class="previewTitle">Order Preview</p>
          <img :src="this.image" class="previewImage" />
          <div class="previewItem">
            <p class="label">Flag Type: </p>
            <p class="labeled">{{ this.type }}</p>
          </div>
          <div class="previewItem">
            <p class="label" v-if="this.type != 'FrameYourFlag'">Flag Size: </p>
            <p class="label" v-if="this.type == 'FrameYourFlag'">Frame Size: </p>
            <p class="labeled">{{ this.size }}</p>
          </div>
          <div v-if="this.type != 'Unframed'" class="previewItem">
            <p class="label">Frame Type: </p>
            <p class="labeled">{{ this.frame }}</p>
          </div>
          <div v-if="this.type == 'FrameYourFlag'" class="previewItem">
            <p class="label">Custom Framing: </p>
            <p class="labeled" v-if="this.customFramed">Yes</p>
            <p class="labeled" v-else>No</p>
          </div>
          <div class="previewItem" v-if="this.appliedDiscount != null">
            <p class="discountLabel">Discount: </p>
            <p class="labeled">${{ this.discountAmount }}</p>
          </div>
          <div class="quantity">
            <p class="quantityLabel">Quantity: </p>
            <p class="labeled">{{ this.quantity }}</p>
          </div>
          <div class="totalPrice">
            <p class="priceLabel">Total Price: </p>
            <p class="labeled" v-if="this.discountAmount">${{ this.price-this.discountAmount }}</p>
            <p class="labeled" v-else>${{ this.price }}</p>
          </div>
        </div>
      </td>
    </table>
    <div v-if="this.paid">
      <p class="thankYou">Thank you for your purchase</p>
      <p class="redirect">You will now be redirected to the home page</p>
    </div>
  </div>
</template>
  
<script>
import { loadScript } from '@paypal/paypal-js';

export default {
  name: "checkoutPage",
  data: function () {
    return {
      type: "",
      size: "",
      frame: "",
      customFramed: false,
      quantity: 0,
      price: 0,
      onSale: false,
      paid: false,
      cart: false,
      image: "",
      discounts: {'design': 'testCode', 'firstResponder': 'testCode2'},
      appliedDiscount: null,
      discountAmount: null
    }
  },
  methods: {
    discountCheckChange: function (event) {
      event.preventDefault()
      if (this.discounts[event.target.value]) {
        document.getElementById('valid').classList.remove('hidden')
        document.getElementById('invalid').classList.add('hidden')
        if (!this.onSale) {
          this.appliedDiscount = this.discounts[event.target.value]
          this.discountAmount = this.calculateDiscount();
        }
      } else {
        document.getElementById('valid').classList.add('hidden')
        document.getElementById('invalid').classList.remove('hidden')
        this.appliedDiscount = null
        this.discountAmount = null
      }
    },
    calculateDiscount: function () {
      if (this.appliedDiscount) {
        return this.price * 0.15;
      } else {
        return null
      }
    },
    createPuchaceUnits: function () {
      var order = []
      var items = this.createItems();
      var amount = this.createAmount();
      order.push({ items, amount })
      return order
    },
    createItem: function (name, quantity, price) {
      var item = {
        name: name,
        description: name,
        quantity: quantity,
        unit_amount: {
          currency_code: 'USD',
          value: price
        }
      }
      return item
    },
    createItems: function () {
      var items = []
      //flag item
      var price = this.price
      if (this.customFramed) price = price - 100
      items.push(this.createItem(this.type, this.quantity, price))
      //size item
      items.push(this.createItem(this.size, 1, 0))
      //frame item
      items.push(this.createItem(this.frame, 1, 0))
      //customFramed item
      if (this.type == "FrameYourFlag") {
        if (this.customFramed) {
          items.push(this.createItem("Custom Framed", 1, 100))
        }
        else {
          items.push(this.createItem("Not Custom Framed", 1, 0))
        }
      }
      return items
    },
    createAmount: function () {
      var price = this.price;
      var discount = this.calculateDiscount();
      if (discount) {
        var discountPrice = price - discount
        return {
          currency_code: 'USD',
          value: discountPrice,
          breakdown: {
            item_total: {
              currency_code: 'USD',
              value: price
            },
            discount: {
              currency_code: 'USD',
              value: discount
            }
          }
        }
      } else {
        return {
          currency_code: 'USD',
          value: price,
          breakdown: {
            item_total: {
              currency_code: 'USD',
              value: price
            }
          }
        }
      }
    },
    createOrder: function (data, actions) {
      var purchase_units = this.createPuchaceUnits();
      return actions.order.create({
        purchase_units: purchase_units
      })
    },
    onApprove: function (data, actions) {
      return actions.order.capture().then(() => {
        this.paid = true;
        sessionStorage.removeItem('cart')
        setTimeout(() => {
          this.$router.push('/')
        }, "4000")
      });
    }
  },
  mounted() {
    if (sessionStorage.cart) {
      this.cart = true
      var data = JSON.parse(sessionStorage.cart)
      this.type = data.type;
      this.size = data.size;
      this.frame = data.frame;
      this.customFramed = !!data.customFramed;
      this.quantity = data.quantity;
      this.price = data.price;
      this.onSale = !!data.onSale;
      if (this.customFramed) this.price = this.price + 100;
      this.image = data.image;
      loadScript({
        'client-id': 'AdKmM_mRG9E8SE0FRxmRmHFcS_Gse95_8sTkUiP0Yuhb73BqfJTwIi9pDXKrmyat2wMBrrLo9ulwStzY',
        'disable-funding': 'paylater',
        'components': "buttons"
      }).then((paypal) => {
        paypal.Buttons({
          createOrder: this.createOrder,
          onApprove: this.onApprove,
        }).render('#paypal-button-container')
      });
    }
    else {
      this.$router.push('/')
    }
  }
}
</script>
  
<style scoped>
.paymentDiv {
  width: 60%;
  padding-left: 19%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}

.buttons {
  width: 49%;
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  & .discount {
    display: inline;
    margin-bottom: 1rem;
    & .label {
      font-size: 1.2rem;
      padding-right: 1rem;
    }
    & .input {
      margin-right: 0.5rem;
      margin-bottom: 1rem;
    }
    & .valid {
      font-size: 1.2rem;
      color: #25c25c;
    }
    & .invalid {
      font-size: 1.2rem;
      color: #c23b3b;
    }
    & .hidden {
      display: none;
    }
    & .discountSaleDiscliamer {
      margin-top: 0.25rem;
      color: #c23b3b;
      font-size: 1rem;
      font-weight: 600;
    }
  }
}

.notPaid {
  padding-top: 2%;
  height: 100%;
}

.preview {
  width: 29%;
  border: 2px solid black;
  position: fixed;
  top: 10%;
  align-content: center;
  justify-content: center;
}

.previewTitle {
  font-size: 1.7rem;
  color: #c23b3b;
  font-weight: 600;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
}

.previewDiv {
  position: relative;
  width: 100%;
}

.previewImage {
  width: 90%;
  padding: 5%;
  max-height: 30rem;
}

.previewItem {
  height: 2em;
  display: flex;
  padding-left: 1em;
  padding-bottom: 0.5em;
  padding-right: 1em;
  width: 94%;
  justify-content: space-between;
}

.quantity {
  display: flex;
  justify-content: center;
}

.totalPrice {
  display: flex;
  justify-content: center;
}

.label {
  width: 50%;
}

.thankYou {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: #c23b3b;
}

.redirect {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
}
</style>