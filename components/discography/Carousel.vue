<template>
<div class="container">
  <VueSlickCarousel v-bind="settings">
    <div v-for="n in 3" class="imageWrapper" :key="n">
      <nuxt-link to="$nuxt.route.param">
        <img src="" alt="" class="image">
      </nuxt-link>
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
        "dots": false,
        "slidesToShow": 5,
        "slidesToScroll": 1,
        "variable-width": true
      }
    }
  },
  components: {
    VueSlickCarousel
  }
}
</script>

<style scoped>
  .container {
  }

  .imageWrapper {
    background-color: violet;
    width: unset;
  }
  .image {
    height: 100px;
    width: 100px;
    background-color: red;
    margin: 20px;
  }

</style>
