<template>
<div id="intro">
  <app-img-sequence
        :directory="'dl_logo'"
        :filename="'dl_logo_'"
        :numFrames="51"
        :format="'jpg'"
        :myWidth="615"
        :myHeight="135"
        :doneFn="introDone"
        ></app-img-sequence>
</div>
</template>


<script>
  import imgSequence from './shared/imgSequence.vue'

  export default {
    components: {
      appImgSequence: imgSequence
    },
    data() {
      return {
        introFinished: false
      }
    },
    computed: {
      dataLoaded(){
        //check data is loaded before getting rid of the intro
        return this.$store.getters.isLoaded;
      }
    },
    methods: {
      introDone(){
        this.introFinished = true;
        if(this.dataLoaded===true){
          this.$store.dispatch('setIntroDone');
        } else {
          let self = this;
          setTimeout(self.introDone, 200);
          console.log('test')
        }
      }
    }
  }

</script>

<style lang="scss">
#intro {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

}

#image-sequence {
  margin: 0;
  position: absolute;
  width: 360px;
  top: 49%;
  left: 50%;
  margin-right: -360px;
  transform: translate(-50%, -50%);
  img {
    width: 100%;
    max-width: 100%;
  }
}

</style>