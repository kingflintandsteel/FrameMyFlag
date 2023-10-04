<template>
  <store type="Bennington" :images="images" :title="this.title" :description="this.description" :sizes="this.sizes"
    :formItems="this.formItems" :defaultSize="loadingSize ? loadingSize : this.defaultSize" />
</template>
  
<script>
import store from '../components/store.vue'
import image1 from "../images/s735706548779528181_p23_i9_w1516.jpeg"
import image2 from "../images/s735706548779528181_p23_i1_w2538.jpeg"
import image3 from "../images/s735706548779528181_p23_i2_w4896.jpeg"
import image4 from "../images/BlackSatinMetal.jpeg"
import image5 from "../images/WhiteWoodGrain.jpeg"
import image6 from "../images/RusticWoodGrain.jpeg"

export default {
  name: "benningtonStore",
  components: {
    store
  },
  data: function () {
    return {
      title: "Bennington 1776",
      description: "A vintage version of the Bennington 1776 American flag associated with the American revolution. All flags are antiqued by hand, which makes them one-of-a-kind originals. Perfect for any home or business.",
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
        },
        {
          label: "Frame Style",
          id: "frameStyle",
          options: [
            {
              value: "BlackSatinWood",
              name: "Black Satin Wood",
              disabledSizes: ["SuperJumbo"]
            },
            {
              value: "BlackSatinMetal",
              name: "Black Satin Metal",
              forcedSizes: ["SuperJumbo"]
            },
            {
              value: "RusticWoodGrain",
              name: "Rustic Wood Grain",
              disabledSizes: ["SuperJumbo"]
            },
            {
              value: "White Wood Grain",
              name: "White Wood Grain",
              disabledSizes: ["SuperJumbo"]
            }
          ]
        }
      ],
      sizes: [
        {
          value: "Large",
          price: 599.00,
          salePrice: null,
          details: [
            "All Flags Are Hand Crafted - Made to Order - No Inventories",
            "25 to 40 Business Days to Create, Frame, and Ship",
            "Flags Unframed are 36\" x 24\"",
            "Flags Framed are 42\" x 32\"",
            "100% Cotton Flags",
            "Flags Mounted on 100% Cotton Linen",
            "Black Satin Wood, White Satin Wood, and Rustic Wood Frames",
            "Crystal Clear Acrylic Covering (No Glass)",
            "Acid Free Foam Core Backing",
            "Comes Framed and Ready to Hang"
          ]
        },
        {
          value: "SuperJumbo",
          price: 1399.00,
          salePrice: null,
          details: [
            "All Flags Are Hand Crafted - Made to Order - No Inventories",
            "25 to 40 Business Days to Create, Frame, and Ship",
            "Flags Unframed are 60\" x 36\"",
            "Flags Framed are 65\" x 40\"",
            "100% Cotton Flags",
            "Flags Mounted on 100% Cotton Linen",
            "Black Satin Metal Frames",
            "Crystal Clear Acrylic Covering (No Glass)",
            "Acid Free Foam core Backing",
            "Comes Framed and Ready to Hang"
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
        },
        {
          src: image6,
          index: 5
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