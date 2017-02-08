<template>
  <div id="image-sequence">
    <img :src="currentSrc" v-if="ready">
  </div>
</template>

<script>
  import preLoader from 'pre-loader';
  export default {
  props: {
    directory: String,
    filename: String,
    numFrames: Number, 
    format: String,
    myWidth: Number, 
    myHeight: Number,
    loop: {
      type: Boolean,
      default: false
    },
    doneFn: Function
  },
  data() {
    return {
      urls: [],
      donePercent: 0,
      ready: false,
      currentFrame: 0,
      currentSrc: '',
      done: false
    }
  },
  methods: {
    pushToArray(i) {
      let frameNum = this.padDigits(i, 5),
          imgName = this.filename + frameNum + '.' + this.format,
          fullPath = require('../../assets/img_seq/' + this.directory + '/' + imgName);
      this.urls.push(fullPath);
      if(i == this.numFrames-1) {
        this.preLoad();
      }
    },
    preLoad() {
      let self = this;
      new preLoader(this.urls, {
        onProgress: function(src, element, index){
            if (element){
                //console.log('loaded ' + src);
                // gets optional reference to element you can use:
                // document.appendChild(element);
            }
            else {
                //console.log('failed ' + src);
            }
            self.donePercent = Math.floor((100 / this.queue.length) * this.completed.length);
            //console.log(self.donePercent + '% completed', this.completed.length + this.errors.length + ' / ' + this.queue.length + ' done');
        },
        onComplete: function(loaded, errors){
            //console.log('cache primed with:', loaded);
            errors && errors.length && console.log('these failed:', errors);
            self.loadDone();
        }
      });
    },
    loadDone() {
      this.currentSrc = this.urls[this.currentFrame];
      this.ready = true;
      this.$nextTick(function(){
        this.nextFrame();
      }) 
    },
    nextFrame() {
      if(!this.loop) {
        //play once
        if(this.currentFrame < this.urls.length-1) {
          this.currentFrame ++;
          //console.log(this.currentFrame)
          setTimeout(this.animate, 30);
        } else {
          //animation finished
          this.done = true;
          var self = this;
          setTimeout(function(){
            self.doneFn();
          },1000);
        }
      } else {
        //loop the animation
        if(this.currentFrame < this.urls.length-1) {
          this.currentFrame ++;
          //console.log(this.currentFrame)
          setTimeout(this.animate, 30);
        } else {
          this.currentFrame = 0;
          //console.log('loop');
          setTimeout(this.animate, 30);
        }
      }
    },
    animate() {
      this.$nextTick(function(){
        this.currentSrc = this.urls[this.currentFrame];
        this.nextFrame();
      }) 
    },
    padDigits(n, numDigits) {
      //prepend the frame number with zeroes eg '00001'
      let q = '';
      for(let p=0; p<numDigits; p++){
        q += '0'
      }
      let s = n.toString(),
          i = s.length,
          z = q.slice(0,numDigits-i);
      return z+s;
    },
    repeat(n) {
      //http://stackoverflow.com/questions/30452263/is-there-a-mechanism-to-loop-x-times-in-es6-ecmascript-6-without-mutable-varia
        return (f) => {
        Array(n).fill().map((_, i) => f(i));
      }
    }
  },
  created() {
    this.repeat(this.numFrames) (this.pushToArray);
  }
}
</script>

<style lang="scss">

</style>