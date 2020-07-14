<template>
  <div class="originalConteiner" >
<!--    <VueSlickCarousel :arrows="true" :dots="true">-->
<!--      <div>1</div>-->
<!--      <div>2</div>-->
<!--      <div>3</div>-->
<!--      <div>4</div>-->
<!--    </VueSlickCarousel>-->

    <ul class="">
      <li v-for="content in originalList" :key="content.JN">
        <h5 class="title">{{content.title}}</h5>
        <span class="jn">{{content.JN}}</span>
        <p class="price">{{content.price}} <span class="priceInTax">(税込：{{Math.floor(content.price * 1.1)}})</span>></p>
        <div>
          <iframe
            class="movie"
            :src="content.movie"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen/>
        </div>

        <div class="purchaseButtonList">
          <p class="purchaseButtonList__text">ご購入はこちら</p>
<!--          <purchase-->
<!--            :amazon="content.purchase.amazon"-->
<!--            :towerRecords="content.purchase.towerRecords"-->
<!--            :diskUnion="content.purchase.diskUnion"-->
<!--          />-->
        </div>
        <div>
          <p v-if="content.pickUp" class="purchaseButtonList__pickUpDescription">{{content.pickUpDescription}}</p>
          <p v-else class="purchaseButtonList__description">{{content.description}}</p>
        </div>
        <p v-if="content.notice" class="purchaseButtonList__notice">{{content.notice}}</p>
      </li>
    </ul>
  </div>
</template>



<script>
  import purchase from "@/components/discography/purchase"
  import VueSlickCarousel from 'vue-slick-carousel'

  export default {
    name: "original",
    components: {
      purchase,
      VueSlickCarousel
    },
    props: ['originalList']
  }
</script>

<style scoped>
  .movie {
    width: 448px;
    height: 252px;
  }

  .title {
    position: relative;
    padding: 0.1em 0.5em;
    background: linear-gradient(to right, rgb(124, 245, 255), transparent);
    color: #545454;
  }

  .originalConteiner {
    padding: 0 20px;
  }
</style>


<!--          width="448"-->
<!--          height="252"-->
