<template>
  <div>
    <h2>ORIGINAL</h2>
    <Carousel></Carousel>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import Carousel from '@/components/discography/Carousel.vue'

export default {
  name: "index",
  components: {
    Carousel
  }
}
</script>

<style scoped>

</style>
