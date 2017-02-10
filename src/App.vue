<template>
  <div class="container">
  <transition name="fade-slow" mode="out-in">
  <app-hamburger v-if="!intro"></app-hamburger>
  </transition>
  <transition name="fade-quick" mode="out-in">
  <app-about v-if="modalAbout"></app-about>
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
import Intro from './components/Intro.vue';
import About from './components/About.vue'
export default {
  name: 'app',
  components: {
    appHeader: Header,
    appHamburger: Hamburger,
    appArtworks: Artworks,
    appIntro: Intro,  
    appAbout: About,
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
    },
    modalAbout() {
      return this.$store.getters.isModalAbout;
    }
  },
  methods: {
    onResize(){
      this.$nextTick(function() {
        this.$store.dispatch('setWinSize')
      })
    },
    showFooter(){
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

<style lang="scss">
@import 'assets/css/reset.css';
@import 'assets/css/grid.css';

body {
  font-family: 'brandon-grotesque';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6, p, a, ul, li {
  font-family: 'brandon-grotesque';
  color: #fff;
}

h1   {
  font-weight: 900;
  font-size: 2em;
}

h2 {
  font-weight: 500;
  font-size: 2em;
}

h3 {
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: underline;
  line-height: 4em;
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
  text-decoration: none;
  transition: color 0.25s;
  &:hover{
    color: #ccc;
  }
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
