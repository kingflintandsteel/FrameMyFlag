<template>
  <store type="Vintage" :images="images" :title="this.title" :description="this.description" :sizes="this.sizes"
    :formItems="this.formItems" :defaultSize="loadingSize ? loadingSize : this.defaultSize" />
</template>
  
<script>
import store from '../components/store.vue'
import image1 from "../images/s735706548779528181_p2_i69_w2000.jpeg"
import image2 from "../images/s735706548779528181_p2_i63_w3596.jpg"
import image3 from "../images/s735706548779528181_p2_i70_w2000.jpeg"
import image4 from "../images/BlackSatinWood.jpeg"
import image5 from "../images/WhiteSatinWood.jpeg"
import image6 from "../images/RusticWoodGrain.jpeg"
import image7 from "../images/BlackSatinMetal.jpeg"

export default {
  name: "vintageStore",
  components: {
    store
  },
  data: function () {
    return {
      title: "Vintage",
      description: "A vintage version of the classic American Flag. All flags are antiqued by hand, which makes them one-of-a-kind originals. Perfect for any home or business.",
      defaultSize: "Medium",
      formItems: [
        {
          label: "Size",
          id: "size",
          defaultOption: true,
          options: [
            {
              value: "Medium",
              name: "Medium"
            },
            {
              value: "Large",
              name: "Large"
            },
            {
              value: "Jumbo",
              name: "Jumbo"
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
          defaultOption: true,
          options: [
            {
              value: "BlackSatinWood",
              name: "Black Satin Wood",
              disabledSizes: ["Jumbo", "SuperJumbo"]
            },
            {
              value: "BlackSatinMetal",
              name: "Black Satin Metal",
              forcedSizes: ["Jumbo", "SuperJumbo"]
            },
            {
              value: "RusticWoodGrain",
              name: "Rustic Wood Grain",
              disabledSizes: ["Jumbo", "SuperJumbo"]
            },
            {
              value: "WhiteSatinMetal",
              name: "White Satin Metal",
              disabledSizes: ["Jumbo", "SuperJumbo"]
            }
          ]
        }
      ],
      sizes: [
        {
          value: "Medium",
          price: 349.00,
          salePrice: null,
          details: [
            "All Flags Are Hand Crafted - Made to Order - No Inventories",
            "25 to 40 Business Days to Create, Frame, and Ship",
            "Flags Unframed are 24\" x 16\"",
            "Flags Framed are 33\" x 24\"",
            "100% Cotton Flags",
            "Flags Mounted on 100% Cotton Linen",
            "Black Satin Wood, White Satin Wood, Rustic Wood Frames, and Black Satin Metal Frames",
            "Crystal Clear Acrylic Covering (No Glass)",
            "Acid Free Foam Core Backing",
            "Comes Framed and Ready to Hang"
          ]
        },
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
            "Black Satin Wood, White Satin Wood, Rustic Wood Frames, and Black Satin Metal Frames",
            "Crystal Clear Acrylic Covering (No Glass)",
            "Acid Free Foam Core Backing",
            "Comes Framed and Ready to Hang"
          ]
        },
        {
          value: "Jumbo",
          price: 899.00,
          salePrice: null,
          details: [
            "All Flags Are Hand Crafted - Made to Order - No Inventories",
            "25 to 40 Business Days to Create, Frame, and Ship",
            "Flags Unframed are 52\" x 31\"",
            "Flags Framed are X\" x X\"",
            "100% Cotton Flags",
            "Flags Mounted on 100% Cotton Linen",
            "Black Satin Wood, White Satin Wood, Rustic Wood Frames, and Black Satin Metal Frames",
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
        }
        ,
        {
          src: image6,
          index: 5
        }
        ,
        {
          src: image7,
          index: 6
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