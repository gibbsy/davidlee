<template>
  <div class="modal" @click="hideFn">
   <div class="artwork-full">
    <img :src="artwork" id="artful" ref="pic"> 
   </div>
   <div id="logo-left" > 
    <img src="../../assets/images/dl_logo_transparent.png">
  </div>
   <div id="title">  
   <h1>{{title}}</h1>
   <h2>{{dimensions}}</h2>
   </div>
  </div>
</template>

<script>
import mezr from 'mezr';
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
    }
  },
  created() {
    this.initData();
  }
}
  
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: #eee;
  h1, h2 {
  color: #000;  
  }
  h2{
    font-size: 1.8em;
    line-height: 1.2;
  }
  #title {
    position: absolute;
    bottom: 20px;
    left: 50px;
  }
}

.artwork-full {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 60%;
  height: 65%;
  padding: 5% 10%;
  background-color: #fff;
  transform: translate(-50%, -50%);
  img {
    position: absolute;
    border: none;
    max-width: 90%;
    max-height: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}


  
</style>