<template>
  <section id="portraits" :style="{top: posTop+'px'}">
  
  </section>
</template>

<script>
export default {
  props: ['posTop']
}
  
</script>

<style>

#portraits {
  position: absolute;
  left: 0;
  background-color: #ccc;
  width: 100%;
  height: 900px;
  z-index: -1;
}
  
</style>