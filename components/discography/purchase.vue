<template>
  <div>
    <ul>
      <li v-if="amazon">
        <a :href="amazon" target="_blank">
          <img src="~assets/images/icon/amazon.png"/>
        </a>
      </li>

      <li v-if="towerRecords">
        <a :href="towerRecords" target="_blank">
          <img src="~assets/images/icon/towerRecords.svg"/>
        </a>
      </li>

      <li v-if="diskUnion">
        <a :href="diskUnion" target="_blank">
          <img src="~assets/images/icon/diskUnion.svg"/>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "purchase",
    props: ['towerRecords', 'amazon', 'diskUnion']
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
