<template>
  <section id="footer">
  <div id="portraits">
  <div id="pic-david" :style="{opacity: picOpacity, 'background-position': '0px '+davePicPos+'px'}"></div>
  <div id="pic-lee" :style="{opacity: picOpacity, 'background-position': '0px '+leePicPos+'px'}"></div>
    <h1 id="david" :style="{opacity: picOpacity, transform: 'translateY('+daveTop+'px)'}">David</h1>
    <h1 id="lee" :style="{opacity: picOpacity, transform: 'translateY('+leeTop+'px)'}">Lee</h1>
  </div>
  <div id="contact">
  <h3>Enquire</h3>
  <h1>07939 526 895</h1>
  <h1><a href="mailto:hello@davidandlee.com">hello@davidandlee.com</a></h1>
  </div>
  </section>
</template>

<script>
import mezr from 'mezr';
export default {
  data() {
    return {
      sectionTop: 0
    }
  },
  computed: {
    scrolled() {
      return this.$store.getters.scrollPos;
    },
    daveTop() {
      return -1*(this.$store.getters.scrollPos-this.sectionTop)/3;
    },
    leeTop() {
      return (this.$store.getters.scrollPos-this.sectionTop)/3;
    },
    davePicPos() {
      return 300-((this.$store.getters.scrollPos-this.sectionTop)/4);
    },
    leePicPos() {
      return 200+((this.$store.getters.scrollPos-this.sectionTop)/4);
    },
    picOpacity() {
      return ((this.$store.getters.scrollPos-(this.sectionTop-500))/500).toFixed(3);
    }
  },
  methods: {
    getSectionPos() {
      this.sectionTop = mezr.offset(document.getElementById('footer'), 'content').top;
    }
  },
  mounted() {
    this.getSectionPos();
  }
}
  
</script>

<style lang="scss">
#footer {
  position: relative;
  width: 100%;  
}
#portraits {
  position: relative;
  width: 100%;
  height: 900px;
  background-color: #ccc;
  z-index: -3;
  overflow-y: hidden;
  h1 {
    position: absolute;
    display: inline;
    color: #fff;
    text-transform: uppercase;
    font-size: 12em;
    z-index: -5;
  }
  img {
    z-index: inherit;
  }
}

#lee {
  left: 58%;
  top: 450px;
}

#david {
  left: 12%;
  top: 600px;
}

#pic-lee{
  position: absolute;
  left: 50%;
  top: 0;
  width: 183px;
  height: 900px;
  background: transparent url('../assets/images/placeholder_lee.png') no-repeat left top;
}

#pic-david {
  position: absolute;
  width: 307px;
  height: 900px;
  bottom: 0;
  left: 50%;
  margin-left: -307px;
  background: transparent url('../assets/images/placeholder_dave.png') no-repeat left bottom;
}
#contact {
  position: relative;
  background-color: #000;
  height: 400px;
  text-align: center;
  color: #eee;
  padding-top: 130px;
  z-index: 0;
  h1 {
    font-size: 3em;
    line-height: 1.2;
  }
  h3 {

  }
}
</style>