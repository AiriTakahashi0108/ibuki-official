<template>
  <ul class="worksList">
    <li v-for="content in original.other" :key="content.id">
      <h5>{{content.title}}</h5>
      <span>{{content.JN}}</span>
      <p>{{content.price}}</p>
      <div>
        <iframe
          width="560"
          height="315"
          :src="content.movie"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen/>
      </div>

      <div class="purchaseButtonList">
        <p>ご購入はこちら</p>
        <button><a :href="content.purchase.amazon">amazon</a></button>
        <button><a :href="content.purchase.towerRecord">towerRecord</a></button>
        <button><a :href="content.purchase.discUnion">discUnion</a></button>
        <button><a :href="content.purchase.spotify">spotify</a></button>
      </div>

      <p v-if="content.notice">{{content.notice}}</p>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "request"
  }
</script>

<style scoped>

</style>
