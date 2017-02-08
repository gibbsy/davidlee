<template>
  <div class="container">
  <transition v-if="!intro" name="fade-slow" mode="out-in">
  <app-hamburger></app-hamburger>
  </transition>
    <transition name="fade-slow" mode="out-in">
      <app-intro v-if="intro"></app-intro>
      <template v-else>
        <div class="wrapper">  
        <app-header></app-header>
        <app-artworks></app-artworks>
        </div>
      </template>
    </transition>
  <transition name="fade-slow" mode="out-in">
    <app-footer v-if="!hideFooter"></app-footer>
  </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Hamburger from './components/Shared/Hamburger.vue'
import Artworks from './components/Artworks/Artworks.vue';
import Footer from './components/Footer.vue';
import Intro from './components/Intro.vue'
export default {
  name: 'app',
  components: {
    appHeader: Header,
    appHamburger: Hamburger,
    appArtworks: Artworks,
    appIntro: Intro,  
    appFooter: Footer
  },
  data() {
    return {
      hideFooter: true
    }
  },
  computed : {
    intro() {
      return this.$store.getters.isIntro;
    } 
  },
  methods: {
    onResize(){
      this.$nextTick(function() {
        this.$store.dispatch('setWinSize')
      })
    },
    showFooter(){
      //to do : hook up to state scroll fn
      let self = this;
      setTimeout(function(){
        self.hideFooter=false;
      },6000)
    }
  },
  created() {
    this.$store.dispatch('loadData');
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.onResize);
      this.$store.dispatch('setWinSize');
      this.showFooter();
    })
  }
}
</script>

<style>
@import 'assets/css/reset.css';
@import 'assets/css/grid.css';

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #fff;
}

.container {
  width: 100%;
  padding: 0;
  margin: 0 auto;

}
.wrapper {
  width: 70%;
  padding: 50px 100px;
  margin: 0 auto;
}

.fade-slow-enter-active, .fade-slow-leave-active {
  transition: opacity 1s
}
.fade-slow-enter, .fade-slow-leave-to {
  opacity: 0
}

.fade-quick-enter-active, .fade-quick-leave-active {
  transition: opacity 0.5s
}
.fade-quick-enter, .fade-quick-leave-to {
  opacity: 0
}
</style>
