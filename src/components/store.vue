<template>
  <div class="store">
    <div class="imageSelector">
      <imageSelector :images="images" />
    </div>
    <div class="aboutItem">
      <div>
        <p class="title">{{ title }}</p>
      </div>
      <div class="priceDiv">
        <p class="price" id="price"><s v-if="salePrice">${{ price }}</s> <span v-if="!salePrice">${{ price }}</span></p>
        <p class="price" id="salePrice" v-if="salePrice">${{ salePrice }}</p>
      </div>
      <div>
        <p class="description">{{ description }}</p>
      </div>
      <div>
        <div id="allDetails" class="allDetails">
          <p id="productDetailsTitle" class="productDetailsTitle">Product Details</p>
          <div v-for="tempSize in this.sizes" :key="tempSize.value" :id="'details_' + tempSize.value" class="details"
            style="display: none;">
            <ul style="margin:0px ;">
              <li v-for="detail in tempSize.details" :key="detail" class="detail">{{ detail }}</li>
            </ul>
          </div>
        </div>
      </div>
      <form class="form">
        <div class="formDiv" v-for="formItem in formItems" :key="formItem.id">
          <label :for="formItem.id" class="formLabel">{{ formItem.label }}</label>
          <select :id="formItem.id" class="formSelect" @change="changeForm($event)">
            <option v-for="option in formItem.options" :key="option.name" :value="option.value">{{ option.name }}</option>
          </select>
        </div>
        <div class="formDiv">
          <label for="quantity" class="formLabel">Quantity</label>
          <input type="number" id="quantity" class="quantitySelect" min="1" v-model="quantity">
        </div>
        <div class="buyButtonDiv">
          <button @click="purchase" disabled class="buyButton" id="buyButton">Buy Now</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import imageSelector from './imageSelector.vue'

export default {
  name: "storeComponent",
  components: {
    imageSelector
  },
  data: function () {
    return {
      price: 0,
      salePrice: null,
      quantity: 1,
      size: ""
    }
  },
  props: {
    type: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    sizes: {
      type: Array,
      required: true
    },
    defaultSize: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    formItems: {
      type: Array,
      required: true
    },
    staticDetails: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    getSelectedOptions: function () {
      var selected = [];
      this.formItems.forEach((item) => {
        selected.push(this.getSelectedOption(item.id));
      })
      return selected;
    },
    getSelectedOption: function (id) {
      try {
        return document.getElementById(id).value
      } catch (error) {
        return null
      }
    },
    getFrameStyle: function () {
      var frameStyle = this.getSelectedOption("frameStyle");
      if (!frameStyle) {
        if (this.type == "traditional") {
          return "BlackSatinMetal";
        }
        return null;
      }
      return frameStyle;
    },
    getCustomFramed: function () {
      var num = this.getSelectedOption("customFraming");
      if (num == 1) return 1
      return 0
    },
    purchase: function () {
      sessionStorage.cart = JSON.stringify({
        type: this.type,
        size: this.size,
        price: this.salePrice ? this.salePrice : this.price,
        frame: this.getFrameStyle(),
        customFramed: this.getCustomFramed(),
        quantity: this.quantity,
        image: this.images[0].src,
        onSale: this.salePrice ? true : false
      })
      this.$router.push('/checkout')
    },
    defaultSizeSelect: function () {
      document.getElementById(this.formItems[0].id).value = this.defaultSize;
    },
    removeSelected: function (element) {
      element.value = null;
    },
    noDefaultOptions: function () {
      for (var i = 0; i < this.formItems.length; i++) {
        var element = document.getElementById(this.formItems[i].id);
        this.removeSelected(element)
      }
    },
    findShownDetail: function () {
      var children = document.getElementById("allDetails").children
      for (var i = 0; i < children.length; i++) {
        if (children[i].style.display == "block") {
          return children[i].id
        }
      }
    },
    hideElement: function (id) {
      var element = document.getElementById(id);
      element.style.display = "none";
      element.classList.remove("shiftRightOut");
    },
    showNewDetails: function () {
      if (this.staticDetails) return
      var oldId = this.findShownDetail();
      var newId = "details_" + this.size;
      document.getElementById(oldId).classList.add("shiftRightOut");
      document.getElementById(newId).style.display = "block";
      document.getElementById("allDetails").style.height = this.findDetailsHeight(newId);
      setTimeout(this.hideElement, 1000, oldId);
    },
    showFirstDetails: function () {
      var id = "details_" + this.size;
      document.getElementById(id).style.display = "block";
      document.getElementById("allDetails").style.height = this.findDetailsHeight(id);
    },
    changePrice: function () {
      for (var i = 0; i < this.sizes.length; i++) {
        if (this.size == this.sizes[i].value) {
          this.price = this.sizes[i].price
          this.salePrice = this.sizes[i].salePrice
        }
      }
    },
    getSelectId: function (id) {
      for (var i = 0; i < this.formItems.length; i++) {
        if (this.formItems[i].id == id) return this.formItems[i];
      }
      return undefined;
    },
    disableOptions: function (id) {
      var options = document.getElementById(id).children;
      var formItem = this.getSelectId(id)
      for (var x = 0; x < formItem.options.length; x++) {
        if (formItem.options[x].disabledSizes) {
          if (formItem.options[x].disabledSizes.includes(this.size)) {
            options[x].disabled = true;
            options[x].selected = false;
          }
          else {
            options[x].disabled = false;
          }
        }
        else if (formItem.options[x].forcedSizes) {
          if (formItem.options[x].forcedSizes.includes(this.size)) {
            options[x].disabled = false;
            options[x].selected = true;
          }
        }
      }
    },
    changeForm: function (event) {
      if (event.srcElement.id == "size") {
        this.size = event.srcElement.value;
        this.changePrice();
        this.showNewDetails();
        this.formItems.forEach((item) => this.disableOptions(item.id))
      }
      if (!this.getSelectedOptions().includes("")) {
        document.getElementById("buyButton").disabled = false;
      }
    },
    findDetailsHeight: function (detailsId) {
      var title = document.getElementById("productDetailsTitle").offsetHeight;
      title = title + 8;
      var details = document.getElementById(detailsId).offsetHeight;
      var total = title + details;
      return total + "px"
    }
  },
  mounted() {
    document.getElementById("buyButton").addEventListener("click", function (event) {
      event.preventDefault();
    });
    this.size = this.defaultSize;
    this.noDefaultOptions();
    this.defaultSizeSelect();
    this.showFirstDetails();
    this.changePrice();
    if (!this.getSelectedOptions().includes("")) {
      document.getElementById("buyButton").disabled = false;
    }
  }
}
</script>

<style scoped>
.store {
  display: flex;
  flex-flow: column wrap;
  height: 80vh;
  width: 75%;
  overflow-x: hidden;
  padding-top: 5rem;
  padding-left: 25%;
  align-content: flex-start;

  & .imageSelector {
    flex-grow: 10;
    height: 70%;
    width: 34.7%;
    overflow: hidden;
  }

  & .aboutItem {
    position: relative;
    z-index: 1;
    & .title {
      padding-left: 10px;
      font-size: 2rem;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
      color: #c23b3b;
    }

    & .priceDiv {
      display: flex;
      flex-direction: row;
      height: 3rem;

      & .price {
        padding-left: 10px;
        font-size: 1.5rem;
        margin-top: 0.5rem;
      }
    }

    & .description {
      padding-left: 10px;
      margin-bottom: 0.5rem;
      width: 31rem;
      word-wrap: normal;
    }

    & .allDetails {
      position: relative;
      width: 31rem;
      overflow: hidden;
      z-index: 1;

      & .productDetailsTitle {
        padding-left: 10px;
        margin-bottom: 0px;
        margin-top: 0.5rem;
      }

      & .details {
        position: absolute;
        background-color: white;
        width: 31rem;
        z-index: 1;

        & .detail {
          overflow-wrap: normal;
          font-family: Arial, Helvetica, sans-serif;
          line-height: 1.5rem;
        }
      }

      & .shiftRightOut {
        position: absolute;
        transition: transform 1s;
        transition-timing-function: linear;
        transform: translate(100%, 0px);
        z-index: 800;
      }
    }
  }

  & .form {
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;

    & .formDiv {
      display: flex;
      width: 50%;
      justify-content: space-between;

      & .formLabel {
        font-family: Arial, Helvetica, sans-serif;
        padding-left: 10px;
        padding-right: 5px;
        margin-top: 5px;
        max-width: 6rem;
      }

      & .formSelect {
        width: 54.4%;
        margin-top: 5px;
        font-family: Arial, Helvetica, sans-serif;
        height: 17px;
        align-self: center;
      }

      & .quantitySelect {
        width: 51.2%;
        margin-top: 5px;
      }
    }

    & .buyButtonDiv {
      width: 50%;
      display: flex;
      justify-content: center;
      margin-top: 5px;

      & .buyButton {

      }
    }
  }
}
</style>