<template>
  <div>
    <ul>
      <li v-if="distribution.appleMusic">
        <a :href="distribution.appleMusic" target="_blank">
          <img src="~assets/images/icon/appleMusic.png"/>
        </a>
      </li>

      <li v-if="distribution.spotify">
        <a :href="distribution.spotify" target="_blank">
          <img src="~assets/images/icon/spotify.png"/>
        </a>
      </li>

      <li v-if="distribution.amazon">
        <a :href="distribution.amazon" target="_blank">
          <img src="~assets/images/icon/amazon-white.svg"/>
        </a>
      </li>

      <li v-if="distribution.awa">
        <a :href="distribution.awa" target="_blank">
          <img src="~assets/images/icon/awa.svg"/>
        </a>
      </li>

      <li v-if="distribution.youtube">
        <a :href="distribution.youtube" target="_blank">
          <img src="~assets/images/icon/youtube.svg"/>
        </a>
      </li>

      <li v-if="distribution.lineMusic">
        <a :href="distribution.lineMusic" target="_blank">
          <img src="~assets/images/icon/lineMusic.png"/>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Distribution",
    props: ['distribution']
  }
</script>

<style scoped>
  ul {
    display: flex;
    align-items: center;
    padding: 0;
  }
  li {
    list-style: none;
    margin-right: 16px;
  }
  img {
    width: 30px;
  }
</style>
