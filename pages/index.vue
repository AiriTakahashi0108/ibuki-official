<template>
  <div class="backgroundFix">
    <div class="contentsContainer">
      <div class="firstView">
        <FirstViewLogo class="firstView-logo"/>
      </div>
      <div class="backgroundOpacity">

        <section class="pickUp content">
          <h2 class="picUpTitle">PIC UP</h2>
          <div class="voice">
            <div>
              <h3 class="voiceTitle">オンライン・ボーカルレッスン開催中！！</h3>
              <div class="voiceDetail">
                <p class="voiceDetailText">
                  小林信一氏のオンラインギターDOJOにて…<br>
                  ボーカルコース第一弾IBUKIボーカルレッスン開講しております！！<br>
                </p>
                <img class="voiceDetailImage" src="~assets/images/top_picUp_voice.jpg" alt="IBUKIオンラインレッスン">
              </div>
              <p class="voiceDetailEntry">お申し込みは<a href="https://www.xiaolinonline.net/">コチラ</a>から</p>
            </div>
            <div>
              <h4 class="voiceFbTitle">レッスン前半をFBにて無料公開中！</h4>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FvocalIBUKI%2F&tabs=timeline&width=350&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=570179513117450"
                width="350" height="400px" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
                allowTransparency="true" allow="encrypted-media"></iframe>
            </div>
          </div>
        </section>

        <section class="news content">
          <h2 class="newsTitle">NEWS</h2>
          <div class="newsScrollBox">
            <ul class="newsContent">
              <li v-for="news in newsList" :key="news.id">
                <h3 class="newsContentTitle">{{news.title}} <span v-if="newArrival(news)"
                                                                  class="newsContentIcon">NEW</span></h3>
                <span>{{news.DATE | dispDate}}</span>
                <p>{{news.content}}</p>
                <nuxt-link :to="news.link" v-if="news.link">{{linkName[news.link].name}}へ</nuxt-link>
                <a :href="news.externalLink.url" v-if="news.externalLink">{{news.externalLink.name}}へ</a>
                <hr>
              </li>
            </ul>
          </div>
        </section>

        <div class="sns content">
          <h2>SNS</h2>
          <ul class="snsList">
            <li><a href="https://twitter.com/vocal_IBUKI" target="_blank"></a></li>
            <li><a href="https://www.facebook.com/athena.ibuki?ref=bookmarks" target="_blank"></a>個人</li>
            <li><a href="https://www.facebook.com/vocalIBUKI/notifications/" target="_blank"></a>FBページ</li>
            <li><a href="https://www.instagram.com/vocalibuki/" target="_blank"></a></li>
          </ul>
          <!-- ツイッター埋め込み検討-->
          <!--          <a class="twitter-timeline" data-width="350" data-height="600" data-dnt="true" data-theme="light"-->
          <!--             href="https://twitter.com/vocal_IBUKI?ref_src=twsrc%5Etfw">Tweets by vocal_IBUKI</a>-->
          <!--          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->
        </div>

      </div>
      <BasicFooter/>
    </div>
  </div>
</template>

<script>
  import FirstViewLogo from "@/components/parts/FirsrViewLogo"
  import BasicFooter from "@/components/BasicFooter"
  import {mapGetters} from 'vuex'
  import moment from 'moment'

  export default {

    components: {FirstViewLogo, BasicFooter},
    data() {
      return {}
    },
    computed: {
      ...mapGetters({
        newsList: 'news/newsList',
        linkName: 'common/linkName',
      }),
    },
    methods: {
      newArrival(news) {
        return moment().diff(moment(news.DATE, 'YYYYMMDDHHmm'), 'days') <= 7
      }
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
    padding: 0;
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

  /*PIC UP*/
  .pickUp {
    margin-bottom: 30px;
  }

  .voice {
    display: flex;
    align-items: center;
  }

  .voiceTitle {
    font-weight: bold;
    font-size: 30px;
    color: #fffc89;
  }

  .voiceDetail {
    display: flex;
    background: white;
    color: #272727;
    margin-right: 30px;
  }

  .voiceDetailText {
    padding: 15px;
  }

  .voiceDetailImage {
    height: 100%;
  }

  .voiceDetailEntry {
    line-height: 47px;
    font-size: 30px;
  }

  /*NEWS*/
  .news {
    background: black;
    padding: 20px 40px;
    margin-bottom: 30px;
  }

  .newsScrollBox {
    position: relative;
    height: 500px;
    overflow: scroll;
  }

  .newsTitle {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    color: white;
  }

  .newsContent {
    overflow: auto;
    padding: 0px;
    height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    position: absolute;
    width: 100%;

    & > li {
      margin-bottom: auto;
    }
  }

  .newsContentTitle {
    color: white;
  }

  .newsContentIcon {
    display: inline-block;
    background: #ff5500;
    color: #ffffff;
    font-weight: bold;
    font-size: 10pt;
    letter-spacing: -1px;
    line-height: 1;
    vertical-align: top;
    margin: 0;
    padding: 2px;
    transform: scale(0.9) translateX(0%) translateY(45%);
    animation: flashing .7s infinite alternate;
  }

  @keyframes flashing {
    0% {
      color: #ff5500;
      background: #ffffff;
    }
    100% {
      color: #ffffff;
      background: #ff5500;
    }
  }

  .sns {
  }

  .snsList {
    display: flex;
    padding: 0;

    & > li {
      width: 80px;
      margin-right: 20px;
      text-align: center;

      &:nth-child(1):before {
        content: url(~assets/images/icon-twitter.svg);
      }

      &:nth-child(2):before {
        content: url(~assets/images/icon-fb.svg);
      }

      &:nth-child(3):before {
        content: url(~assets/images/icon-fb.svg);
      }

      &:nth-child(4):before {
        content: url(~assets/images/icon-insta.svg);
      }
    }
  }
</style>
