<template>
  <div id="header-large" class="header" ref="lrg">
  <div id="logo-top" ref="logo"> 
    <img src="/assets/images/dl_logo_transparent.png">
  </div>
  <transition appear name="fade-down">
  <div id="logo-left" v-if="showLeftLogo"> 
    <img src="/assets/images/dl_logo_transparent.png">
  </div>
  </transition>
  <transition appear name="fade-slow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1895.7 258.05"><title>artwork</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M179.76,253.34l-12.1-36H81.31l-13.1,36H0L99.79,4.7h50.06l98.78,248.64ZM125.33,82h-1L98.78,167h52.08Z"/><path d="M420,253.34,362.54,173h-.67v80.3H301.05V4.7h78.62c26.21,0,55.1.67,76.61,17.81,20.5,16.46,30.58,42,30.58,67.87,0,38.3-22.51,71.9-61.82,78.29l67.54,84.67ZM385.05,60.48H361.87V129.7h22.51c23.86,0,41.66-10.08,41.66-35.62C426,69.55,406.89,60.48,385.05,60.48Z"/><path d="M645.79,60.48V253.34h-63.5V60.48H533.23V4.7H694.51V60.48Z"/><path d="M995.9,253.34H940.13L902.83,92.4h-.67l-37.3,160.94H807.41L743.23,4.7h64.51L841,166.32h.67L878.3,4.7H927L963,167h.67L997.58,4.7h64.18Z"/><path d="M1230.09,258c-70.22,0-130.7-54.43-130.7-126A143,143,0,0,1,1109.13,79c3.7-9.74,9.74-19.49,16.13-27.89C1150.79,17.47,1188.09,0,1230.43,0,1303,0,1361.8,55.78,1361.8,129,1361.8,202.61,1303,258,1230.09,258Zm.67-202.27c-40.66,0-67.87,33.6-67.87,72.58,0,39.65,27.22,73.92,68.54,73.92,40,0,66.86-34.94,66.86-72.91C1298.3,90.72,1271.42,55.78,1230.76,55.78Z"/><path d="M1541.9,253.34,1484.44,173h-.67v80.3H1423V4.7h78.62c26.21,0,55.1.67,76.61,17.81,20.5,16.46,30.58,42,30.58,67.87,0,38.3-22.51,71.9-61.82,78.29l67.54,84.67ZM1507,60.48h-23.18V129.7h22.51c23.86,0,41.66-10.08,41.66-35.62C1547.94,69.55,1528.79,60.48,1507,60.48Z"/><path d="M1821.45,253.34l-67.87-107.52h-.67V253.34h-63.5V4.7h63.5V116.59h.67L1823.8,4.7h66.53l-82.32,124,87.7,124.66Z"/></g></g></svg>
  </transition>
  </div>
</template>

<script>
import mezr from 'mezr';
export default {
  data() {
    return {
      ticking: false,
      showLarge: true,
      lrgHeight: 0,
      showLeftLogo: false
    }
  },
  computed: {
    scrolled() {
      return this.$store.getters.scrollPos;
    }
  },
  methods: {
    onScroll() {
      this.$store.dispatch('onScrolled', window.scrollY.toFixed(1));
      this.requestTick();    
    },
    requestTick() {
      if (!this.ticking) {
            var self = this;
            window.requestAnimationFrame(function() {
              self.updateScroll();   
            });
          }
      this.ticking = true;
    },
    updateScroll() {
      this.ticking = false;
      let currentScrollY = this.$store.getters.scrollPos;
      console.log('scrolled'+this.$store.getters.scrollPos)
      //console.log('content'+mezr.offset(this.$refs.logo, 'content').top);
      //update dom
        
      //this.last_known_scroll_position < this.lrgHeight ? this.showLarge = true : this.showLarge = false;
    },
    scrollInit() {
      window.addEventListener('scroll', this.onScroll);
      //this.lrgHeight = this.$refs.lrg.offsetHeight/2;
    },
    checkInView(el){
      let pos = mezr.offset(el, 'content').top + mezr.height(el, 'content');
      return this.$store.getters.scrollPos > pos;
    }
  },
  watch: {
    scrolled: function() {
      this.showLeftLogo = this.checkInView(this.$refs.logo);
    }
  },
  mounted() {
    this.scrollInit();
  }
}
  
</script>

<style lang="scss">
  #header-large{
    width: 60%;
    padding: 20px 0 140px 0;
    margin: 0 auto;
    display: block;
  }
  #logo-top{
    display: block;
    width: 140px;
    margin: 0 auto;
    padding-bottom: 80px;
     img {
      max-width: 100%;
     }
  }

  #logo-left{
    position: fixed;
    width: 120px;
    top: 65px;
    left: 50px;
    img {
      max-width: 100%;
     }
  }
.fade-down-enter-active, .fade-down-leave-active {
  transition: all 0.25s
}
.fade-down-enter, .fade-down-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(-40px);
}
</style>
