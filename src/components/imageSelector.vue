<template>
  <div class="selector">
    <img :src="images[index].src" width="500" class="bigImage">
    <div class="smallImages">
      <img v-for="image in images" :key="image.index" :src="image.src" @click="switchMain(image.index)" class="smallImage">
    </div>
  </div>
</template>
  
<script>
//import

export default {
  name: "ImageSelector",
  data: function () {
    return {
      index: 0
    }
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  methods: {
    switchMain: function (newIndex) {
      this.index = newIndex
    }
  }
}
</script>
  
<style scoped>
.selector {
  width: 100%;
  height: 100%;
  & .bigImage {
    width: 100%;
    max-height: 50%;
  }
  & .smallImages {
    width: 100%;
    & .smallImage {
      margin: 0px 10px 5px 10px;
      border: 2px solid black;
      width: 25%;
      max-width: 100px;
      height: 80px;
    }
  }
}
</style>