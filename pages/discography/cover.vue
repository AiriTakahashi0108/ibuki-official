<template>
  <div>
    カバー
    <Carousel />
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
  import Carousel from '@/components/discography/Carousel.vue'

  export default {
    name: "index",
    components: {
      Carousel
    },
  }
</script>
