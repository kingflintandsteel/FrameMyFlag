<template>
  <store type="FrameYourFlag" :images="images" :title="this.title" :description="this.description" :sizes="this.sizes"
    :formItems="this.formItems" :defaultSize="loadingSize ? loadingSize : this.defaultSize" :staticDetails="true"/>
</template>
  
<script>
import store from '../components/store.vue'
import image1 from "../images/s735706548779528181_p21_i19_w640.jpeg"
import image2 from "../images/s735706548779528181_p21_i32_w4032.jpeg"
import image3 from "../images/s735706548779528181_p21_i29_w1024.jpeg"
import image4 from "../images/s735706548779528181_p21_i16_w4032.jpeg"
import image5 from "../images/s735706548779528181_p21_i18_w2724.jpeg"
import image6 from "../images/s735706548779528181_p21_i17_w4032.jpeg"

export default {
  name: "frameYourFlagStore",
  components: {
    store
  },
  data: function () {
    return {
      title: "Frame Your Flag",
      description: "Do you already have the perfect flag that you want framed? This option is perfect for you: simply measure your flag and select the size of the frame you want! Custom framing available for $100 add-on",
      defaultSize: "40x28",
      formItems: [
        {
          label: "Size",
          id: "size",
          options: [
            {
              value: "40x28",
              name: "40\" Wide x 28\" High"
            },
            {
              value: "44x32",
              name: "44\" Wide x 32\" High"
            },
            {
              value: "64x40",
              name: "64\" Wide x 40\" High"
            }
            ,
            {
              value: "76x52",
              name: "76\" Wide x 52\" High"
            }
          ]
        },
        {
          label: "Frame Style",
          id: "frameStyle",
          options: [
            {
              value: "BlackSatinMetal",
              name: "Black Satin Metal"
            },
            {
              value: "WhiteSatinMetal",
              name: "White Satin Metal"
            }
          ]
        },
        {
          label: "Custom Framing",
          id: "customFraming",
          options: [
            {
              value: 1,
              name: "Yes"
            },
            {
              value: 0,
              name: "No"
            }
          ]
        }
      ],
      sizes: [
        {
          value: "40x28",
          price: 349.00,
          salePrice: 175.00,
          details: [
            "Black Satin Metal or White Satin Metal Frames",
            "Acid Free Foam Board Backing",
            "Mounting Fabric (Cream Linen)",
            "Crystal Clear Acrylic (Museum Quality)"
          ]
        },
        {
          value: "44x32",
          price: 449.00,
          salePrice: 225.00,
          details: [
            "temp"
          ]
        },
        {
          value: "64x40",
          price: 549.00,
          salePrice: 275.00,
          details: [
            "temp"
          ]
        },
        {
          value: "76x52",
          price: 649.00,
          salePrice: 325.00,
          details: [
            "temp"
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