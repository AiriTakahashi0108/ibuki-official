<template>
  <div v-if="pickUpList">
    <div>
      <h3 v-if="theme === 'original'" class="sectionTitle">ORIGINAL PICK UP!<span>　- オリジナル作品リリース -</span></h3>
      <h3 v-if="theme === 'request'" class="sectionTitle">REQUEST PICK UP!<span>　- 参加作品リリース -</span></h3>
    </div>

    <ul class="pickUpConteiner">
      <li v-for="content in pickUpList" :key="content.JN">
        <h5 class="title"><div>{{content.title}}</div><span class="pickUpIcon">{{ releaseDateText(content.releaseDate) }}</span></h5>
        <div class="pickUp">
          <p class="pickUpDescription">{{content.pickUpDescription}}</p>
          <div class="movie">
            <iframe
              width="100%"
              height="100%"
              :src="content.movie"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen/>
          </div>

          <div class="textBox">
            <div class="textBox__left">
              <p class="price"><span class="label">価格：</span>{{content.price}}円  <span class="price__inTax">(<span class="price__inTax label">税込：</span>{{Math.floor(content.price * 1.1)}}円)</span></p>
              <p class="jn"><span class="label">JANコード：</span>{{content.JN}}</p>

              <div class="purchase">
                <p class="purchase__text">ご購入はこちら</p>
                <purchase
                  :purchase="content.purchase"
                />
              </div>
              <div class="distribution">
                <p class="distribution__text">配信一覧</p>
                <Distribution
                  :distribution="content.distribution"
                />
              </div>
            </div>
            <div class="textBox__right">
              <p class="tunes__label label">曲目：</p>
              <ol class="tunes">
                <li v-for="(tune, index) in content.tunes" :key="index">{{tune}}</li>
              </ol>
            </div>
          </div>

          <p v-if="content.notice" class="purchaseButtonList__notice">{{content.notice}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import Purchase from "@/components/discography/Purchase"
  import Distribution from "@/components/discography/Distribution"

  import moment from "moment-timezone";
  moment.tz.setDefault('Asia/Tokyo')

  export default {
    name: "pickUp",
    components: {
      Purchase,
      Distribution
    },
    props: ['pickUpList', 'theme'],
    methods: {
      releaseDateText(releaseDate) {
        const isoStr = new Date().toISOString();
        var newDate = Number(new moment(isoStr).format('YYYYMMDDHHmm'))

        if(newDate >= releaseDate) {
          var releaseDateFormat = new moment(releaseDate).format('YYYY年M月D日')
          return releaseDateFormat + "発売！！"
        } else {
          return "NOW ON SALE!!"
        }
      }
    }
  }
</script>

<style lang="postcss" scoped>
  .title {
    position: relative;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9402135854341737) 37%, rgba(255,255,255,0.6685049019607843) 100%);
    color: #424242;
    font-size: 22px;
    padding: 0.5em 0.8em;
    display: flex;
    margin: 0;
    justify-content: space-between;
    align-items: center;
    font-weight: bolder;
  }

  .pickUpConteiner {
    padding: 0;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,0.7357317927170868) 0%, rgba(0,0,0,0.8225665266106442) 35%, rgba(0,0,0,1) 100%);
  }

  .pickUp {
    padding: 30px 20px;
    color: white;
  }

  .sectionTitle {
    position: relative;
    margin: 0;
    padding: 15px 15px 15px 30px;
    font: bold 25px Arial, Helvetica, sans-serif;
    color: #fff;
    background: #000;
    text-shadow: 1px 1px 0 rgb(0, 0, 0);
    box-shadow: 0 0 0 1px rgba(141, 141, 141, 0.5) inset;
    background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(63, 63, 63) 25%, rgb(64, 64, 64) 30%, rgb(52, 52, 52) 36%, rgb(56, 56, 56) 50%, rgb(0, 0, 0) 80%, rgb(4, 4, 4) );
    &:before {
      content:" ";
      position:absolute;
      top:0;
      left:15px;
      width:0;
      height:100%;
      border-left:#ccc solid 1px;
    }
    &:after {
      content:" ";
      position:absolute;
      top:0;
      left:16px;
      width:0;
      height:100%;
      border-right:#eee solid 1px;
    }
  }

  .pickUpIcon {
    display: inline-block;
    background: #ff8700;
    color: #ffffff;
    font-weight: bold;
    font-size: 9px;
    letter-spacing: -1px;
    line-height: 1;
    vertical-align: top;
    margin: 0;
    padding: 10px 13px;
    animation: flashing 1.2s infinite alternate;
    min-width: max-content;
    height: fit-content;
  }

  .pickUpDescription {
    margin-bottom: 20px;
  }

  .movie {
    width: 100%;
    height: 50vw;
    max-height: 700px;
    margin-bottom: 20px;
  }

  .textBox {
    display: flex;

    &__left {
      flex-basis: 40%;
    }
  }

  .tunes {
    margin-bottom: 15px;
    &__label {
      magin-bottom: 10px;
    }
    & > li {
      font-size: 16px;
      list-style: decimal-leading-zero;
      padding-left: 6px;
    }
  }

  .price {
    font-size: 19px;
    margin-bottom: 0.4em;
    &__inTax {
      font-size: 15px;
      margin-bottom: 0.4em;
      & .label {
        border-left: none;
      }
    }
  }

  .purchase {
    margin-top: 35px;
    &__text {
      font-weight: bolder;
      border-left: 3px solid aqua;
      padding-left: 10px;
    }
  }

  .distribution {
    margin-top: 25px;
    &__text {
      font-weight: bolder;
      border-left: 3px solid aqua;
      margin-right: 5px;
      padding-left: 10px;
    }
  }

  .label {
    font-size: 13px;
    border-left: 3px solid aqua;
    padding: 3px 3px 3px 9px;
    margin-right: 5px;
  }

  @keyframes flashing {
    0% {
      color: #ff5500;
      background: #ffffff;
    }
    60% {
      color: #ffffff;
      background: #ff5500;
    }
    100% {
      color: #ffffff;
      background: #ff5500;
    }
  }

</style>
