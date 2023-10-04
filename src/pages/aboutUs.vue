<template>
  <div class="imageBanner">
    <img src="../images/aboutUs.jpg" />
  </div>
  <div class="info">
    <p class="title">About Us</p>
    <p class="about">Our team of incredible artisans are dedicated craftsmen who bring energy, ideas, pride and passion to
      their work on behalf of our clients each and every day. We thank them for their dedication and professionalism.
      The Frame My Flag Company was only a concept a few short years ago. But today it has become a thriving business with
      an incredible team of supporting professionals. My deep appreciation goes out to our team, our interior design
      partners, and our incredible clients! We couldn't have done this without your support, patience, and hard work.</p>
    <p class="contact">If you wish to contact us business hours are 9AM to 5PM (EST) - Monday through Friday. For an
      immediate response during office hours, please submit your inquiry to <em>info@framemyflag.com</em>. Submissions are
      responded to within 8 hours or less. Weekend responses may take a bit longer.</p>
    <p class="thankYou"> Thank you!</p>
    <p class="thankYou">The Frame My Flag Team</p>
  </div>
  <div class="footer"></div>
</template>

<script>
export default {
  name: "aboutUs",
  data: function () {
    return {}
  },
  mounted() {
    scroll(0, 0)
  }
}
</script>

<style scoped>
.imageBanner {
  width: 100%;
  margin-top: -5%;

  & img {
    width: 100%;
  }
}

.info {
  display: flex;
  flex-flow: column wrap;
  width: 60%;
  margin-left: 20%;
  font-size: 1.2rem;
  line-height: 2rem;

  & .title {
    text-align: center;
    font-size: 1.7rem;
    color: #c23b3b;
    font-weight: 600;
  }

  & .about {}

  & .contact {
    & em {
      font-style: normal;
      text-decoration: underline;
      font-weight: 600;
    }
  }
}

.footer {
  height: 5rem;
}
</style>