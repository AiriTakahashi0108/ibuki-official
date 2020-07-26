<template>
<div>
  <VueSlickCarousel :settings="settings">
    <div v-for="n in 10" class="image">
      <img src="" alt="">
    </div>
  </VueSlickCarousel>
</div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: "Carousel",
    data() {
      return {
        settings: {
          "dots": true,
        }
      }
    },
    components: {
      VueSlickCarousel
    }
  }
</script>

<style scoped>
  .image {
    height: 100px;
    width: 100px;
    background-color: violet;
    margin: 20px;
  }

</style>
