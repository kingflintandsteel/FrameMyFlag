<template>
  <div v-if="right" class="container right">
    <div class="opinion">
      <p>"{{ opinion }}"</p>
      <p class="from"> - {{ from }}</p>
    </div>
    <img :src="source" />
  </div>
  <div v-if="!right" class="container left">
    <img :src="source" />
    <div class="opinion">
      <p>"{{ opinion }}"</p>
      <p class="from"> - {{ from }}</p>
    </div>
  </div>
</template>
  
<script>
//imports

export default {
  name: "opinionSection",
  data: function () {
    return {

    }
  },
  props: {
    right: {
      type: Boolean,
      default: true
    },
    source: {
      type: String,
      required: true
    },
    opinion: {
      type: String,
      required: true
    },
    from: {
      type: String,
      required: true
    }
  },
  methods: {

  }
}
</script>
  
<style scoped>
.container {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin: 5rem;
  padding-left: 5%;
  padding-right: 5%;

  & p {
    padding-left: 2rem;
    padding-right: 2rem;
    line-height: 2rem;
    font-size: 1.1rem;
  }

  & .opinion {
    position: relative;
    top: 0%;
    background-color: #e9e9e9;
    margin: 2rem;
    margin-top: 0rem;
    height: fit-content;
  }

  & img {
    max-width: 20rem;
    max-height: 20rem;
  }

  & .from {
    color: #c23b3b;
  }
}
</style>