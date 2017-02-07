<template>
  <div class="container">
    <transition name="fade-slow" mode="out-in">
      <app-intro v-if="intro"></app-intro>
      <template v-else>
        <div class="wrapper">  
        <app-header></app-header>
        <app-artworks></app-artworks>
        <app-footer></app-footer>
        </div>
      </template>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Artworks from './components/Artworks/Artworks.vue';
import Footer from './components/Footer.vue';
import Intro from './components/Intro.vue'
export default {
  name: 'app',
  components: {
    appHeader: Header,
    appArtworks: Artworks,
    appIntro: Intro,  
    appFooter: Footer
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
    }
  },
  created() {
    this.$store.dispatch('loadData');
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.onResize);
      this.$store.dispatch('setWinSize');
    })
  }
}
</script>

<style>
@import 'assets/css/reset.css';
@import 'assets/css/grid.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
  margin-top: 60px;
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
  color: #42b983;
}

.container {
  width: 70%;
  padding: 50px 100px;
  margin: 0 auto;
}

.fade-slow-enter-active, .fade-slow-leave-active {
  transition: opacity 2s
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
