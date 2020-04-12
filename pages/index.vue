<template>
  <div class="backgroundFix">
    <div class="contentsContainer">
      <div class="firstView">
        <FirstViewLogo class="firstView-logo"/>
      </div>
      <div class="backgroundOpacity">
        <section class="topNews content">
          <h2 class="topNewsTitle">NEWS</h2>
          <ul class="news">
            <li v-for="news in newsList" :key="news.id">
              <h3 class="newsTitle">{{news.title}}</h3><span>{{news.data}}</span>
              <p>{{news.content}}</p>
              <nuxt-link :to="news.link" v-if="news.link">{{linkName[news.link].name}}へ</nuxt-link>
              <a :href="news.externalLink.url" v-if="news.externalLink">{{news.externalLink.name}}へ</a>
              <hr>
            </li>
          </ul>
        </section>
          テスト
        <div class="topSns content">
          <p>オススメ動画</p>
        </div>
        <div class="pickUp content">
          <p>オススメ動画</p>
        </div>
      </div>
      <BasicFooter/>
    </div>
  </div>
</template>

<script>
  import FirstViewLogo from "@/components/parts/FirsrViewLogo";
  import BasicFooter from "@/components/BasicFooter";
  import {mapGetters} from 'vuex';

  export default {
    components: {FirstViewLogo, BasicFooter},
    computed: {
      ...mapGetters({
        newsList: 'news/newsList',
        linkName: 'common/linkName',
      })
    }
  }
</script>

<style scoped>
  .backgroundFix {
    width: 100vw;
    height: 100vh;
    background: url(~assets/images/firstView.jpg);
    background-size: cover;
    background-position: center;
    position: fixed;
    position: relative;
  }

  .contentsContainer {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: scroll;
  }
  .content {
    background: none;
    color: var(--basic-fontColor-light);
    min-height: 0;
  }

  .firstView {
    height: 100vh;
    width: 100vw;
  }
  .firstView-logo {
    width: 35%;
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
  }

  .backgroundOpacity {
    padding: 50px;
    width: 100vw;
    height: fit-content;
    background: rgba(0, 0, 0, 0.7);
  }

  .topNews {
    background: black;
    padding: 20px 40px;
  }
  .topNewsTitle {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    color: white;
  }
  .news {
    height: -webkit-fill-available;
    overflow: scroll;
    margin:0px;
    padding:0px;
    height: 300px;
  }
  .newsTitle {
    color: white;
  }


  .topSns {
  }

  .pickUp {
  }
</style>
