<template>
  <div class="imgBanner">
    <img src="../images/designPartners.jpg" class="image"/>
  </div>
  <div class="partners">
    <p class="title">Design Partners</p>
    <p class="text">
      We understand just how difficult it can be at times for designers to find that "special" somthing for a client's
      home or office. Let our experienced in-house design staff work with you and your team on your next project to select
      just the right piece of flag art. Whether you're looking for a special, made to order vintage flag or print -small
      or large - we can make it happen on time and on budget! Private Label is available upon request, so we invite
      interior designers and retailers to contact us for special pricing on custom designs. To register as a Design Partner
      and qualify for a 15% discount*, simply contact us at <em class="email">info@framemyflag.com</em> with a copy of your proof of business.
      Please send at least one of the following: business license; designer certification; business card; etc. We look
      forward to communication with you further about your project and how our designer program can best benifit you and
      your clients.
    </p>
    <p class="disclaimer">(*Discounts do not apply to items already on sale)</p>
  </div>
  <div class="footer"></div>
</template>

<script>
export default {
  name: "designPartners",
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
  height: 35rem;
  overflow: hidden;
  & .image {
    width: 100%;
    object-fit: cover;
    object-position: 0% -10%;
  }
}

.partners {
  width: 70%;
  padding-left: 15%;
  & .title {
    text-align: center;
    font-size: 1.7rem;
    color: #c23b3b;
    font-weight: 600;
  }

  & .text {
    line-height: 1.7rem;
    font-size: 1.3rem;
    & .email {
      font-style: normal;
      font-weight: 600;
      text-decoration: underline;
    }
  }
}

.footer {
  height: 5rem;
}
</style>