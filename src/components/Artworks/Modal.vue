<template>
  <div class="modal" @click="hideFn">
   {{title}}
    <img :src="artwork">
  </div>
</template>

<script>
export default {
  props: ['hideFn'],
  data() {
    return {
      title: '',
      dimensions: '',
      artwork: ''
    }
  },
  computed: {
    selected() {
      return this.$store.getters.selected;
    }
  },
  methods: {
    initData(){
      this.title = this.selected.title;
      this.dimensions = this.selected.dimensions;
      this.artwork = require('../../assets/full/' + this.selected.full);
      console.log('init');
    }
  },
  created() {
    this.initData();
  }
}
  
</script>

<style lang="scss">
.modal{
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  height: 80%;
  padding: 10% 15%;
  background-color: #000;
  color: #fff;
  img {
    border: 5px red solid;
    transition: all 5s;
  }
}
  
</style>