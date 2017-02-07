<template>
<!-- <div class="content_section group right_margin"></div> -->
 <div class="artworks" 
      ref="artworks"
      :style="{height: myHeight + 'px'}">
  <app-artwork v-for="(artwork, index) in artworks" 
      :artwork="artwork" 
      :key="index" 
      :data-index="index" 
      :index="index"
      :heightFn="updateHeight"
      :selectFn="showModal">      
  </app-artwork>
  <app-portraits 
      v-if="myHeight"
      :posTop="myHeight">      
  </app-portraits>
  <transition name="fade-quick" appear>
  <app-modal 
    v-if="activateModal"
    :hideFn="hideModal">    
  </app-modal>
  </transition>
</div>
</template>

<script>
import Artwork from './Artwork.vue';
import Modal from './Modal.vue';
import Portraits from './Portraits.vue';

export default {
  data() {
    return {
      myHeight: '',
      lastStoredArtHeight: '',
      activateModal: false
    }
  },
  computed: {
    artworks() {
      return this.$store.getters.artworks
    },
    numRows() {
      return this.artworks.length/2
    }
  },
  methods: {
    updateHeight(val) {
      if(val != this.lastStoredArtHeight) {
        this.myHeight = val*this.numRows + 150*this.numRows;
        this.lastStoredArtHeight = val;
        console.log(this.myHeight);
      }
    },
    showModal(index) {
      this.$store.dispatch('setSelected', index);  
      this.$nextTick(function() {
      this.activateModal = true;
      })
    },
    hideModal() {
      this.activateModal = false;
    }
  },
  components: {
    appArtwork: Artwork,
    appModal: Modal,
    appPortraits: Portraits
  }
}
</script>

<style>

 .artworks {
 /* -webkit-column-count: 2; 
  -moz-column-count: 2; 
  column-count: 2;
  column-gap: 100px;*/

 }


</style>