<template>
  <img src="../images/banner1-1.jpg" class="imageBanner">
  <div class="page">
    <div class="introText">
      <img src="../images/Semi-Annual-Sales-Event.jpg" alt="Semi-Annual Sales Event" class="saleImage" />
      <p>
        The Frame My Flag Company is proud to present our "AMERICANA VINTAGE COLLECTION" created from USA Made 100%
        cotton flags and customized just for you. Our proprietary process creates a unique aged look making each flag
        an original. No two flags are ever alike. After customizing your flag, it is then professionally displayed in your
        choice of frame. Our primary goal is to provide you with a quality product that you and your family will cherish
        for years to come, so we ask for your patience as we prepare your order. We do not sell or ship from an existing
        inventory. Each vintage flag is hand-made by artisans in our studio, then mounted in the frame of your choice and
        covered with museum quality, clear acrylic (no glass). You will be notified the day your order ships along with a
        tracking number. If you have not received a tracking number or shipping notice, then this means your flag is still
        in process.
      </p>
      <p class="notice">
        The time it takes for your flag to be completed depends on the size of the flag ordered. Our Large, XL, JUMBO and
        SUPER JUMBO size vintage flags are 100% created by hand and require a minimum of 25 - 40 business days to create.
      </p>
    </div>
    <hr class="seperator">
    <div class="importantFeatures">
      <div class="left">
        <p>Important Features</p>
        <ul>
          <li>Made in the USA</li>
          <li>100% USA Cotton</li>
          <li>Acid Free Foam Board</li>
          <li>Wood or Metal Frames</li>
          <li>All Flags Are Made to Order</li>
          <li>Hand Crafted Vintage Process</li>
          <li>Free Shipping (Continental USA)</li>
          <li>Flags Mounted on Cotton Linen</li>
          <li>Clear Museum Quality Acrylic</li>
        </ul>
      </div>
      <div class="right">
        <div class="imageCard">
          <img src="../images/new-appliqued-flag.jpg" alt="Hand-Made Cotton Flag with Appliqued Stars" />
          <p>Hand-Made Cotton Flag with Appliqued Stars</p>
        </div>
        <div class="imageCard">
          <img src="../images/Sewing_Flag.jpg" alt="Embroidered Stars on Super Sumbo Flag" />
          <p>Embroidered Stars on Super Jumbo Flag</p>
        </div>
        <div class="imageCard">
          <img src="../images/Traditional-Light-Vin-Standard-Vin.jpg" alt="Traditional Flag and Antiqued Flags"
            width="100" />
          <p>Traditional Flag and Antiqued Flags</p>
        </div>
      </div>
    </div>
    <hr class="seperator">
    <carosuel :slides='[
      {
        title: "Vintage American Flags - Custom Framed - Free Shipping",
        important: "100% Cotton - Made In USA",
        description: "Medium (33\" x 24\") \nLarge (42\" x 32\") \nJumbo (53\" x 32\") \nSuper Jumbo (65\" x 40\")",
        source: this.carousel1,
        link: "/vintage",
        index: 0
      },
      {
        title: "Traditional American Flags - Custom Framed - Free Shipping",
        important: "100% Cotton - Made In USA",
        description: "Medium (33\" x 24\") \nLarge (42\" x 32\") \nXLarge (45\" x 33\") \nSuperJumbo (65\" x 40\")",
        source: this.carousel2,
        link: "/traditional",
        index: 1
      },
      {
        title: "Vintage Beenington 1776 Flags - Custom Framed - Free Shipping",
        important: "100% Cotton - Made In USA",
        description: "Large (42\" x 32\") \nSuper Jumbo (65\" x 40\")",
        source: this.carousel3,
        link: "/bennington",
        index: 2
      },
      {
        title: "Vintage Betsy Ross Flag - Custom Framed - Free Shipping",
        important: "100% Cotton - Made In USA",
        description: "Large (42\" x 32\") \nXLarge (45\" x 33\") \nSuper Jumbo (65\" x 40\")",
        source: this.carousel4,
        link: "/betsy",
        index: 3
      }
    ]' />
    <hr class="seperator">
    <div class="firstResponders">
      <img src="../images/First-Responders.jpg" alt="" />
      <p class="notice">Military; Teachers; Medical; Police; Firemen & All First Responders</p>
      <p class="text">As a small token of our appreciation for your service, we offer all first responders (Police; Fire;
        EMT;
        Teachers; Doctors; Nurses; Border Patrol; etc.) a 15% discount when purchasing our flags. Simply submit your first
        responder photo ID; security badge; etc. to <em>info@framemyflag.com</em> as confirmation that you are either
        currently active or retired from one of these professions. Upon receipt of proof, we will email you a special code
        to obtain your 15% maximum discount when ordering FULL PRICE ITEMS ONLY (CANNOT BE USED IN CONJUNCTION WITH
        SALES). We thank you for your service and look forward to framing your flag!</p>
    </div>
    <hr class="seperator">
    <div>
      <div class="opinions">
        <p class="notice">Client Opinions</p>
        <opinion :source="this.opinion0"
          opinion='The team at The Frame My Flag Company did a fantastic job with the flags we ordered for our gym. The workmanship quality is world class, and their customer service was fantastic! Plus, they are very patriotic and love America! I would highly recommend Frame My Flag!'
          from="J. B. - Dallas, TX" :right="false" />
        <hr class="seperator"/>
        <opinion :source="this.opinion1"
          opinion='We receive many compliments on your flags.  It is truly a center piece of our design.'
          from="V.P Jim 'n' Nicks BBQ - Birmingham, AL" :right="true" />
        <hr class="seperator">
        <opinion :source="this.opinion2"
          opinion='This flag is amazing! I was so impressed with the quality of this flag. It makes a statement in my office. It is truly a work of art.'
          from="J. Jackson - Mass." :right="false" />
        <hr class="seperator">
        <opinion :source="this.opinion3"
          opinion='I wanted this flag for our recently renovated home to put in our triplet’s nursery. It was the perfect addition and arrived just in time for their 1 year photoshoot. We will cherish these nursery photos forever!'
          from="E. O. - Utah" :right="true" />
        <hr class="seperator">
        <opinion :source="this.opinion4"
          opinion='They deserve 100 stars! Excellent customer service, beautiful meticulous art piece. I would recommend them to everyone.'
          from="A. D. - Alexandria, VA" :right="false" />
        <hr class="seperator">
        <opinion :source="this.opinion5"
          opinion='This flag is beyond cool!   We purchased it for our son’s room; it’s masculine & we really love the vintage look accompanied with the black frame. Thank you!!'
          from="E. W. - Ladera Ranch, CA" :right="true" />
        <hr class="seperator">
        <opinion :source="this.opinion6"
          opinion='Package is exactly as described and looks incredible! I would certainly recommend and would vouch for the communication coming from the seller. There was a bit of a delay but they communicated with me due to something outside of their control. Would definitely order through them again. Great product!'
          from="C. C. - Midlothian, VA" :right="false" />
        <hr class="seperator">
        <opinion :source="this.opinion7" opinion='Absolutely stunning art work for our 1852 style home!'
          from="C. U. - Fredericksburg, VA" :right="true" />
      </div>
      <hr class="seperator">
      <div class="reviews">
        <p class="notice">Reviews</p>
        <review
          review="XL Vintage Flag - Absolutely beautiful!! Most amazing thing I've ever bought on-line - very excited!"
          from="Dr. V. - Golden, CO" />
        <review
          review="Jumbo Vintage Flag - Absolutely beautiful, thank you!  Delivered on time and great customer service, 5 Stars!!!!"
          from="A. T. - Malibu, CA" />
        <review review="Jumbo Vintage Betsy Ross Flag - Looks great in our London office - PERFECT!"
          from="U. S. Based Law Firm - London, England" />
        <review
          review="SUPER JUMBO Vintage Flag - The flag looks GREAT and my client loves it!! The 3' x 5' flag we selected is perfect."
          from="K. J. - Interior Designer - Sonoma, CA" />
      </div>
    </div>
    <hr class="seperator">
    <div class="links">
      <div class="imageLink">
        <a href="https://www.missingkids.org/supportus/waystogive" target="_blank">
          <img src="../images/missing-children-network-logo.jpg" alt="Etsy Logo" />
        </a>
        <p>Proud Support of the Missing and Exploited Children Foundation</p>
      </div>
      <div class="imageLink">
        <a href="https://www.garysinisefoundation.org/" target="_blank">
          <img src="../images/gary-sinise-foundation-logo.jpg" alt="Etsy Logo" />
        </a>
        <p>Proud Supporter of The Gray Sinise Foundation</p>
      </div>
    </div>
    <hr class="seperator">
    <div class="returns">
      <p class="title">RETURNS, TERMS, AND CONDITIONS OF SALES</p>
      <ul>
        <li>We Gladly accept order changes withing <em>10 days of initial order.</em></li>
        <li>Once you flag has been created, we do not accept order cancellations, but please contact us if you have any
          questions about your order.</li>
      </ul>
      <p>The following items <u>cannot be returned or exchanged</u></p>
      <ul>
        <li>Due to the fact these items are "made to order", unless they arrive damaged or defective resulting from the
          shipping company.</li>
        <li>We do not accept returns for the following items:
          <ul>
            <li>Hand-made vintage flags or custom flag orders</li>
            <li>Any flags purchased on sale or discounted</li>
          </ul>
        </li>
      </ul>
      <p class="conditions">Conditions of return for approved items:</p>
      <ul>
        <li>Except for orders damaged during shipment, buyers are responsible for return shipping costs. If the item is
          not
          returned in its original condition, the buyer is responsibile for any loss or damage.</li>
      </ul>
    </div>
  </div>
  <div class="footer"></div>
</template>
  
<script>
import carosuel from '../components/carousel.vue'
import opinion from '../components/opinion.vue'
import review from '../components/review.vue'
import carousel1 from '../images/s735706548779528181_p2_i69_w2000.jpeg'
import carousel2 from '../images/s735706548779528181_p28_i1_w1140.jpeg'
import carousel3 from '../images/bennington-vintage-flag-on-wall.jpg'
import carousel4 from '../images/betsy-ross-black-wood_orig.jpg'
import carousel5 from '../images/american-flag-jumbo_orig.jpg'
import opinion0 from '../images/client-studio-in-texas.jpeg'
import opinion1 from '../images/jim-n-nicks-bbq-3-orig.jpg'
import opinion2 from '../images/office-wall.jpg'
import opinion3 from '../images/baby-room.jpg'
import opinion4 from '../images/del-santo-flag-2.jpg'
import opinion5 from '../images/em-large-flag.jpg'
import opinion6 from '../images/c-carroll-jumbo-flag.jpg'
import opinion7 from '../images/coach-upperman-ole-glory-2.jpg'

export default {
  components: {
    carosuel,
    opinion,
    review
  },
  name: 'HomeView',
  data: function () {
    return {
      serverHello: "",
      carousel1: carousel1,
      carousel2: carousel2,
      carousel3: carousel3,
      carousel4: carousel4,
      carousel5: carousel5,
      opinion0: opinion0,
      opinion1: opinion1,
      opinion2: opinion2,
      opinion3: opinion3,
      opinion4: opinion4,
      opinion5: opinion5,
      opinion6: opinion6,
      opinion7: opinion7,
    }
  },
  props: {

  },
  methods: {

  },
  mounted() {
    scroll(0, 0)
  }
}
</script>
  
<style scoped>
.imageBanner {
  width: 100%;
}

.introText {
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  & p {
    font-size: 20px;
    padding-left: 1em;
    padding-right: 1em;
    width: 70%;

    &.notice {
      color: red;
      width: 100%;
    }
  }

  & img {
    width: 25%;
    padding-top: 1em;
  }

  &.noSale {

    & img {
      display: none;
    }

    & p {
      width: 100%;

      &.notice {
        color: red;
      }
    }
  }
}

.importantFeatures {
  display: flex;
  flex-flow: row;
  width: 100%;

  & .left {
    max-width: 20%;
    & p {
      font-weight: 900;
    }

    & ul {
      list-style-type: square;

      & li {
        font-family: Arial, Helvetica, sans-serif;
        padding-top: .5rem;
      }
    }
  }

  & .right {
    display: flex;
    flex-flow: row;
    width: 75%;
    & .imageCard {
      display: flex;
      flex-flow: column;
      border: 2px solid black;
      width: 28.7%;
      margin: 3%;
      height: min-content;
      align-self: center;
      justify-content: space-between;

      & img {
        width: 66.6%;
        padding-left: 2.5rem;
        padding-right: 2.5rem;
        padding-top: 1rem;
      }

      & p {
        text-align: center;
      }
    }
  }
}

.links {
  display: flex;
  justify-content: space-around;
  & .imageLink {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 2%;
    max-width: 33%;

    & a {
      border: 2px solid black;
      max-width: 100%;
      max-height: 65%;
      & img {
        width: 100%;
        height: 100%;
      }
    }

    & p {
      text-align: center;
    }
  }
}

.returns {
  & .title {
    font-size: 1.5rem;
    color: #c23b3b;
    font-weight: 600;
  }

  & .conditions {
    color: #c23b3b;
  }

  & p {
    line-height: 1.5rem;
    font-size: 1.1rem;
  }

  & ul {
    list-style-type: disc;
    line-height: 1.5rem;
    font-size: 1.1rem;

    & li {
      & em {
        font-style: normal;
        color: #c23b3b;
      }
    }
  }
}

.seperator {
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.page {
  width: 60%;
  padding-left: 20%;
}

.firstResponders {
  & .notice {
    font-size: 1.2rem;
    color: #c23b3b;
    font-weight: 600;
    text-align: center;
  }

  & p {
    line-height: 1.7rem;
    font-size: 1.2rem;

    & em {
      font-style: normal;
      text-decoration: underline;
      font-weight: 600;
    }
  }

  & img {
    max-width: 100%;
  }
}

.opinions {
  & .notice {
    font-size: 2rem;
    color: #c23b3b;
    font-weight: 600;
  }
}

.reviews {
  & .notice {
    font-size: 2rem;
    color: #c23b3b;
    font-weight: 600;
  }
}

.footer {
  height: 5rem;
}
</style>
  