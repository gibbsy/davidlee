<template>
  <button class="hamburger hamburger--squeeze" :class="{'is-active': activate, 'light': modalAbout}" type="button" @click="btnToggle">
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</button>
</template>

<script>
export default {
  props: ['menuFn'],
  data() {
    return {
    }
  },
  computed: {
    modalArt() {
      return this.$store.getters.isModalArt;
    },
    modalAbout() {
      return this.$store.getters.isModalAbout;
    },
    modalOff() {
      return this.$store.getters.isModalOff;
    },
    activate() {
      return this.modalAbout || this.modalArt;
    }
  },
  methods: {
    btnToggle() {
      if (this.modalOff){

        this.$store.dispatch('setMenu', 'modalAbout');

      } else if (this.modalAbout) {   

        this.$store.dispatch('setMenu', 'off');

      } else if (this.modalArt) {   

        this.$store.dispatch('setMenu', 'off');

      } 
    }
  }
}
  
</script>

<style lang="scss">
  @import '../../css/hamburgers/hamburgers.scss';
  @import '../../css/hamburgers/_base.scss';
  button {
    border: none;
    &:focus {
      border:none;
      outline: none;
    }
  }
  .hamburger {
    position: fixed;
    top: 65px;
    right: 100px;
    z-index: 101;
    cursor: pointer;
  }
  .hamburger.is-active.light .hamburger-box .hamburger-inner {
  &,
  &::before,
  &::after {
    background-color: #fff;
    }
  }
</style>