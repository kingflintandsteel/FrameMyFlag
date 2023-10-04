<template>
  <store type="Unframed" :images="images" :title="this.title" :description="this.description" :sizes="this.sizes"
    :formItems="this.formItems" :defaultSize="loadingSize ? loadingSize : this.defaultSize" />
</template>
  
<script>
import store from '../components/store.vue'
import image1 from "../images/s735706548779528181_p27_i1_w3600.jpeg"
import image2 from "../images/s735706548779528181_p27_i2_w4896.jpeg"
import image3 from "../images/s735706548779528181_p27_i3_w4896.jpeg"
import image4 from "../images/s735706548779528181_p17_i6_w2000.jpeg"
import image5 from "../images/s735706548779528181_p27_i5_w4896.jpeg"

export default {
  name: "unframedStore",
  components: {
    store
  },
  data: function () {
    return {
      title: "Vintage Unframed",
      description: "We understand that some D.I.Y. folks want to put their own spin on framing these flags so we offer an unframed version of of the vintage flags. All flags are antiqued by hand, which makes them one-of-a-kind originals. Perfect for any home or business.",
      defaultSize: "Large",
      formItems: [
        {
          label: "Size",
          id: "size",
          options: [
            {
              value: "Large",
              name: "Large"
            },
            {
              value: "SuperJumbo",
              name: "Super Jumbo"
            }
          ]
        }
      ],
      sizes: [
        {
          value: "Large",
          price: 349.00,
          salePrice: 175.00,
          details: [
            "All Flags Are Hand Crafted - Made to Order - No Inventories",
            "Embroidered Stars",
            "25 to 40 Business Days to Create, Frame, and Ship",
            "Flags are 36\" x 24\"",
            "100% Cotton Flags"
          ]
        },
        {
          value: "XLarge",
          price: 449.00,
          salePrice: 225.00,
          details: [
            "All Flags Are Hand Crafted - Made to Order - No Inventories",
            "25 to 40 Business Days to Create, Frame, and Ship",
            "Appliqued Stars",
            "Flags are 40\" x 28\"",
            "100% Cotton Flags"
          ]
        },
        {
          value: "Jumbo",
          price: 549.00,
          salePrice: 275.00,
          details: [
            "All Flags Are Hand Crafted - Made to Order - No Inventories",
            "25 to 40 Business Days to Create, Antique, and Ship",
            "Embroidered Stars",
            "Flags are 60\" x 36\"",
            "100% Cotton Flags"
          ]
        },
        {
          value: "SuperJumbo",
          price: 649.00,
          salePrice: 325.00,
          details: [
            "All Flags Are Hand Crafted - Made to Order - No Inventories",
            "Embroidered Stars",
            "25 to 40 Business Days to Create, Frame, and Ship",
            "Flags are 60\" x 36\"",
            "100% Cotton Flags",
          ]
        },
        {
          value: "Gigantic",
          price: 749.00,
          salePrice: 375.00,
          details: [
            "All Flags Are Hand Crafted - Made to Order - No Inventories",
            "Embroidered Stars",
            "25 to 40 Business Days to Create, Antique, and Ship",
            "Flags are 60\" x 36\"",
            "100% Cotton Flags"
          ]
        },
        {
          value: "SuperGigantic",
          price: 849.00,
          salePrice: 425.00,
          details: [
            "All Flags Are Hand Crafted - Made to Order - No Inventories",
            "Embroidered Stars",
            "25 to 40 Business Days to Create, Antique, and Ship",
            "Flags are 60\" x 36\"",
            "100% Cotton Flags"
          ]
        }
      ],
      images: [
        {
          src: image1,
          index: 0
        },
        {
          src: image2,
          index: 1
        },
        {
          src: image3,
          index: 2
        },
        {
          src: image4,
          index: 3
        },
        {
          src: image5,
          index: 4
        }
      ]
    }
  },
  props: {
    loadingSize: {
      type: String,
      required: false
    }
  }
}
</script>
  
<style scoped></style>