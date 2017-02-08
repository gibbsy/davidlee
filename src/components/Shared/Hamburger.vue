<template>
  <button class="hamburger hamburger--squeeze" :class="{'is-active': activate}" type="button" @click="btnToggle">
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
      activate: false
    }
  },
  methods: {
    btnToggle() {
      this.activate = !this.activate;
    }
  }
}
  
</script>

<style lang="scss">
  @import '../../assets/css/hamburgers/hamburgers.scss';
  @import '../../assets/css/hamburgers/_base.scss';
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
  }
</style>