<template>
  <div class="imgBanner">
    <img src="../images/flagFolding.jpg" />
  </div>
  <div class="steps">
    <p class="title">Proper Flag Folding Instructions</p>
    <p class="description">Follow these instructions to ensure that your flag is properly folded and stored.</p>
    <div class="step">
      <p><em>Step 1:</em> Begin with the flag parallel to the floor. It is best to use two people when folding the flag.
      </p>
      <img src="../images/step-1-fold-the-flag.jpeg" />
    </div>
    <div class="step">
      <p><em>Step 2:</em> Fold the flag in half lengthwise, crossing the red stripes over the top of the blue square and
        stars</p>
      <img src="../images/step-2-fold-the-flag.jpeg" />
    </div>
    <div class="step">
      <p><em>Step 3:</em> Holding the flag so that the side with the blue square is toward the ground, fold the flag in
        half again lengthwise, bringing the folded edge up to meet to open edge (as shown) so that the blue square and
        stars are on the outside</p>
      <img src="../images/step-3-fold-the-flag.jpeg" />
    </div>
    <div class="step">
      <p><em>Step 4:</em> Starting with the striped end of the folded flag, fold the bottom corner up to meet the open
        edge of the flag creating a triangular shape.</p>
      <img src="../images/step-4-fold-the-flag.jpeg" />
    </div>
    <div class="step">
      <p><em>Step 5:</em> Fold the triangle section in towards the stars, aligning the outisde edge along the top.</p>
      <img src="../images/step-5-fold-the-flag.jpeg" />
    </div>
    <div class="step">
      <p><em>Step 6:</em> Continue folding down and across in this manner until the final corner remains.</p>
      <img src="../images/step-6-fold-the-flag.jpeg" />
    </div>
    <div class="step">
      <p><em>Step 7:</em> Your final shape should be a blue triangle with stars on both sides (see below).</p>
      <img src="../images/step-7-fold-the-flag.jpeg" class="smallImg" />
    </div>
  </div>
  <div class="footer"></div>
</template>

<script>
export default {
  name: "flagFolding",
  data: function () {
    return {}
  },
  mounted() {
    scroll(0,0)
  }
}
</script>

<style scoped>
.imgBanner {
  width: 100%;
  margin-top: -18%;

  & img {
    width: 100%;
  }
}

.steps {
  display: flex;
  flex-flow: column wrap;
  width: 60%;
  margin-left: 20%;
  font-size: 1.2rem;

  & .title {
    font-size: 1.7rem;
    color: #c23b3b;
    font-weight: 600;
  }

  & .step {
    padding-bottom: 1rem;

    & p {
      & em {
        font-style: normal;
        font-weight: 600;
      }
    }

    & img {
      padding-left: 25%;
    }

    & .smallImg {
      padding-left: 40%;
    }
  }
}

.footer {
  height: 5rem;
}

</style>