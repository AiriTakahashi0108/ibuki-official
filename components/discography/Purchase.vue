<template>
  <div>
    <ul>
      <li v-if="purchase.amazon">
        <a :href="purchase.amazon" target="_blank">
          <img src="~assets/images/icon/amazon.png"/>
        </a>
      </li>

      <li v-if="purchase.towerRecords">
        <a :href="purchase.towerRecords" target="_blank">
          <img src="~assets/images/icon/towerRecords.svg"/>
        </a>
      </li>

      <li v-if="purchase.diskUnion">
        <a :href="purchase.diskUnion" target="_blank">
          <img src="~assets/images/icon/diskUnion.svg"/>
        </a>
      </li>

      <li v-if="purchase.hmv">
        <a :href="purchase.hmv" target="_blank">
          <img src="~assets/images/icon/hmv.svg"/>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Purchase",
    props: ['purchase']
  }
</script>

<style scoped>
ul {
  display: flex;
  padding: 0;
  }
li {
  list-style: none;
  margin-right: 16px;
}
img {
  width: 50px;
}
</style>
