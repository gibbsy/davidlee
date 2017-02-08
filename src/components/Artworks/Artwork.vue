<template>
  <div  class="artwork"
        :class="{left: !isOdd, right: isOdd, off: !isReady, move: appeared}" 
        :style="{ top: posTop + 'px', height: myHeight + 'px' }"
        @click="selectFn(index)">
    <img :src="thumbImg" ref="art">
    <div class="info">
      <h1>{{artwork.title}}</h1>
      <h3>{{artwork.dimensions}}</h3>
      <h3>{{artwork.thumbnail}}</h3>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
  export default {
    props: ['artwork', 'index', 'heightFn', 'selectFn'],
    data() {
      return {
        thumbImg: require('../../assets/thumbs/' + this.artwork.thumbnail),
        myWidth: '',
        myHeight: '',
        posTop: '',
        isReady: false,
        appeared: false
      }
    },
    computed: {
      isOdd() {
        return this.index % 2
      },
      isLeft() {
        return !this.isOdd ? true : false;
      }
      ,
      isRight() {
        return this.isOdd ? true : false;
      },
      rowNum() {
        return this.isLeft ? (this.index+2)/2 : (this.index+1)/2
      },
      winWidth() {
        return this.$store.getters.winWidth;
      },
      winHeight() {
        return this.$store.getters.winHeight;
      }
    },
    methods: {
      viewDetails() {

      },
      calculateSize() {
       this.myWidth = this.$refs.art.offsetWidth;
       this.myHeight = this.$refs.art.offsetHeight;
       this.$nextTick(function() {
        this.calculatePosition();
        })
       console.log('size');
      },
      calculatePosition() {
        this.heightFn(this.myHeight);
        if(this.isLeft==true){
          this.posTop = (this.rowNum-1) * this.myHeight  + this.index * 50;
        } else {
          this.posTop = (this.rowNum-1) * this.myHeight + 200 + this.index * 50;
        }
        if (!this.appeared) {
          this.animateIn();
        }
      },
      animateIn() {
        let delay = this.index * 0.2 + 0.2;
        let self = this;
        TweenMax.set(this.$refs.art, {y:'-=20', opacity:0});
        this.isReady = true;
        TweenMax.to(this.$refs.art, 0.5, {y:0, opacity:1, onComplete: function() {
          self.appeared = true;
        }}).delay(delay);
      }
    },
    watch: {
      winWidth: function() { this.calculateSize() },
      winHeight: function() { this.calculateSize() }
    },
    mounted() {
      var self = this;
      this.$refs.art.addEventListener("load", function() {
          self.calculateSize();  
          //console.log('fired')
      });
    }
  }
</script>

<style lang="scss" scoped>

img {
  max-width: 100%;
}

.artwork{
  position: absolute;
  width: 46%;
  display: block;
}

.artwork.left {
  left: 0;
}

.artwork.right {
  right: 0;
}

.artwork:hover .info {
  opacity: 0.8;
}

.info{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;
  color: #fff;
  cursor: pointer;
  transition: opacity 0.5s;
}

.off {
  opacity: 0;
  transform: transateY(-20px);
}

.move {
  transition: all 0.5s;
}

  
</style>