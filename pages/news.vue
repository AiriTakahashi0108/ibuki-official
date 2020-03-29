<template>
  <div class="newsContainer">
    <div class="news content">
      <pageTitle :title="pageTitle" :detail="pageDetail"/>
      <ul class="newsList">
        <li v-for="news of newsList">
          <h3>{{news.title}}</h3>
          <p>{{news.data}}</p>
          <div>{{news.content}}</div>
          <nuxt-link :to="news.link" v-if="news.link">詳細はこちら：{{ linkName[news.link] }}</nuxt-link>
          <a v-if="news.externalLink" :href="news.externalLink.url" target="_blank">外部リンク：{{news.externalLink.name}}へ</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import PageTitle from "@/components/parts/PageTitle";
  import {mapGetters} from 'vuex';

  export default {
    components: {PageTitle},
    data() {
      return {
        pageTitle: "NEWS",
        pageDetail: "IBUKIの最新情報をお届けします",
      }
    },
    computed: {
      ...mapGetters({
        newsList: 'news/newsList',
        linkName: 'common/linkName',
      }),
    },
  }
</script>

<style lang="postcss" scoped>
  .newsContainer {
    color: var(--basic-fontColor-dark);
  }

  .newsList {
    & > li {
      list-style: none;
    }
  }
</style>
