<template>
  <div class="container" id="container">
    <div class="slide oof" v-for="slide in slides" :key="slide.title">
      <div class="imgHolder">
        <img class="img" :src="slide.source" alt=""/>
      </div>
      <div class="textHolder">
        <p class="title">{{ slide.title }}</p>
        <p class="important">{{ slide.important }}</p>
        <p class="description">{{ slide.description }}</p>
        <div class="buttonDiv">
          <RouterLink :to="slide.link" class="orderButton">Order Now</RouterLink>
        </div>
      </div>
    </div>
    <button @click="clickToNext" class="next button">&gt;</button>
    <button @click="clickToPrev" class="prev button">&lt;</button>
  </div>
</template>
      
<script>
export default {
  name: 'ScrollingSection',
  data: function () {
    return {
      autoPlaying: true,
      timerDelay: 9000,
      pauseDelay: 18000,
      showing: 0,
      currentAnimation: null
    }
  },
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  methods: {
    autoPlay: function () {
      setInterval(() => {
        if (this.autoPlaying) this.toNext();
      }, this.timerDelay);
    },
    pauseAutoPlay: function () {
      setTimeout(this.resumeAutoPlay, this.pauseDelay);
      this.stopAutoPlay()
    },
    toNext: function () {
      var oldShowing = this.showing
      this.showing + 1 >= this.slides.length ?
        this.showing = 0 : this.showing = this.showing + 1
      var oldEle = this.getSlideByIndex(oldShowing)
      var newEle = this.getSlideByIndex(this.showing)
      this.shiftRight(newEle, oldEle);
    },
    toPrev: function () {
      var oldShowing = this.showing
      this.showing - 1 < 0 ?
        this.showing = this.slides.length - 1 : this.showing = this.showing - 1
      var oldEle = this.getSlideByIndex(oldShowing)
      var newEle = this.getSlideByIndex(this.showing)
      this.shiftLeft(newEle, oldEle);
    },
    clickToNext: function () {
      this.pauseAutoPlay()
      this.toNext()
    },
    clickToPrev: function () {
      this.pauseAutoPlay()
      this.toPrev()
    },
    stopAutoPlay: function () {
      this.autoPlaying = false
    },
    resumeAutoPlay: function () {
      this.autoPlaying = true
    },
    getSlideByIndex: function (index) {
      var slides = document.getElementById("container").children;
      return slides[index]
    },
    nextIndex: function (index) {
      var newIndex = index + 1 >= this.slides.length ?
        index = 0 : index = index + 1
      return newIndex
    },
    prevIndex: function (index) {
      var newIndex = index - 1 < 0 ?
        index = this.slides.length - 1 : index = index - 1
      return newIndex
    },
    shiftRight: function (newEle, oldEle) {
      newEle.classList.add("oofLeft")
      newEle.classList.remove("oof")
      newEle.classList.add("shiftRight")
      oldEle.classList.add("shiftRight")
      this.currentAnimation = setTimeout(function () {
        newEle.classList.add("inframe")
        newEle.classList.remove("shiftRight")
        newEle.classList.remove("oofLeft")
        oldEle.classList.add("oof")
        oldEle.classList.remove("shiftRight")
        oldEle.classList.remove("inframe")
      }, 1000)

    },
    shiftLeft: function (newEle, oldEle) {
      newEle.classList.add("oofRight")
      newEle.classList.remove("oof")
      newEle.classList.add("shiftLeft")
      oldEle.classList.add("shiftLeft")
      this.currentAnimation = setTimeout(function () {
        newEle.classList.add("inframe")
        newEle.classList.remove("shiftLeft")
        newEle.classList.remove("oofRight")
        oldEle.classList.add("oof")
        oldEle.classList.remove("shiftLeft")
        oldEle.classList.remove("inframe")
      }, 1000)
    }
  },
  mounted() {
    var current = this.getSlideByIndex(this.showing);
    current.classList.remove("oof")
    current.classList.add("inframe")
    if (this.autoPlaying) this.autoPlay();
  },
  unmounted() {
    this.autoPlaying = false;
  }
}
</script>
      
<style scoped>
.button {
  position: absolute;
  z-index: 990;
  height: 100%;
  width: 5%;
  font-size: 3em;
}

.next {
  right: 0%;
  border-right: 0px solid black;
  border-left: 1px solid black;
  border-bottom: 0px solid black;
  border-top: 0px solid black;
}

.prev {
  left: 0%;
  border-right: 1px solid black;
  border-left: 0px solid black;
  border-bottom: 0px solid black;
  border-top: 0px solid black;
}

.container {
  align-content: center;
  margin-left: 10%;
  width: 80%;
  height: 40vh;
  border: 1px solid black;
  overflow: hidden;
  position: relative;
}

.slide {
  display: flex;
  flex-flow: column wrap;
  position: absolute;
  width: 90%;
  height: 100%;
  background-color: white;
  padding: 0px 5% 0px 5%;

  & .textHolder {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    padding: 5px;
    width: 48%;
    & .title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-top: 3%;
      margin-bottom: 1rem;
    }

    & .important {
      font-size: 1.2rem;
      font-weight: 600;
      line-height: 1.8rem;
      margin-bottom: 0.5rem;
    }

    & .description {
      margin-top: 0.5rem;
      font-size: 1.2rem;
      white-space: pre;
      line-height: 1.8rem;
    }

    & .buttonDiv {
      padding-left: 40%;
      & .orderButton {
        padding: .3rem;
        flex-grow: 0;
        align-self: center;
        border: 2px solid black;
        background-color: #f0f0f0;
      }
      & :hover {
        color: #c23b3b;
      }
    }
  }

  & .imgHolder {
    padding: 3px;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 50%;

    & img {
      max-height: 100%;
      width: 100%;
    }
  }
}

.shiftRight {
  transition: transform 1s linear;
  display: flex;
  transform: translate(100%, 0px);
  z-index: 800;
  overflow: hidden;
}

.shiftLeft {
  transition: transform 1s linear;
  display: flex;
  transform: translate(-100%, 0px);
  z-index: 800;
  overflow: hidden;
}

.oofRight {
  left: 100%;
  overflow: hidden;
}

.oofLeft {
  left: -100%;
  overflow: hidden;
}

.inframe {
  display: flex;
  left: 0%
}

.oof {
  visibility: hidden;
}
</style>