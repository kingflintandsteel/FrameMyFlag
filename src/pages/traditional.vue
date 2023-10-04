<template>
  <store type="Traditional" :images="images" :title="this.title" :description="this.description" :sizes="this.sizes"
    :formItems="this.formItems" :defaultSize="loadingSize ? loadingSize : this.defaultSize" />
</template>
  
<script>
import store from '../components/store.vue'
import image1 from "../images/s735706548779528181_p17_i1_w2430.jpeg"
import image2 from "../images/s735706548779528181_p17_i5_w2000.jpeg"
import image3 from "../images/s735706548779528181_p17_i6_w2000.jpeg"
import image4 from "../images/BlackSatinMetal.jpeg"

export default {
  name: "traditionStore",
  components: {
    store
  },
  data: function () {
    return {
      title: "Traditional",
      description: "A classic American flag available in many sizes, perfect for any home or business.",
      defaultSize: "Medium",
      formItems: [
        {
          label: "Size",
          id: "size",
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
              value: "XLarge",
              name: "XLarge"
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
          value: "Medium",
          price: 249.00,
          salePrice: null,
          details: [
            "All Flags Are Hand Crafted - Made to Order - No Inventories",
            "Embroidered Stars",
            "25 to 40 Business Days to Create, Frame, and Ship",
            "Flags Unframed are 24\" x 16\"",
            "Flags Framed are 33\" x 24\"",
            "100% Cotton Flags",
            "Flags Mounted on 100% Cotton Linen",
            "Black Satin Metal Frames",
            "Crystal Clear Acrylic Covering (No Glass)",
            "Acid Free Foam core Backing",
            "Comes Framed and Ready to Hang"
          ]
        },
        {
          value: "Large",
          price: 449.00,
          salePrice: null,
          details: [
            "All Flags Are Hand Crafted - Made to Order - No Inventories",
            "Embroidered Stars",
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
          value: "XLarge",
          price: 649.00,
          salePrice: null,
          details: [
            "All Flags Are Hand Crafted - Made to Order - No Inventories",
            "25 to 40 Business Days to Create, Frame, and Ship",
            "Appliqued Stars",
            "Flags Unframed are 40\" x 28\"",
            "Flags Framed are 45\" x 33\"",
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
          price: 1349.00,
          salePrice: null,
          details: [
            "All Flags Are Hand Crafted - Made to Order - No Inventories",
            "Embroidered Stars",
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