<template>
  <div class="review">
    <img src="../images/5-gold-stars2_orig.jpeg" />
    <div class="text">
      <p>{{ review }}</p>
      <p class="from"> - {{ from }}</p>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "reviewSection",
  data: function () {
    return {

    }
  },
  props: {
    review: {
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

.review {
  display: flex;
  flex-flow: row;
  margin-bottom: 1rem;

  & img {
    width: 25%;
    padding-right: 3rem;
    max-height: 5.25rem;
    align-self: center;
  }

  & .text {
    background-color: #e9e9e9;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    & .from {
      color: #c23b3b;
    }
  }
}

</style>