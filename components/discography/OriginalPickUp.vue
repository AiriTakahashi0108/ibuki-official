<template>
  <div v-if="originalPickUpList">
    <h3 class="sectionTitle">ORIGINAL PICK UP!<span>　- オリジナル作品リリース -</span></h3>

    <ul class="originalPickUpConteiner">
      <li v-for="content in originalPickUpList" :key="content.JN">
        <h5 class="title"><div>{{content.title}}</div><span class="pickUpIcon">{{ releaseDateText(content.releaseDate) }}</span></h5>
        <div class="originalPickUp">
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
          <p class="price"><span class="label">価格：</span>{{content.price}}円  <span class="priceInTax">(<span class="label">税込：</span>{{Math.floor(content.price * 1.1)}}円)</span></p>
          <p class="jn"><span class="label">JANコード：</span>{{content.JN}}</p>

          <div class="purchase">
            <p class="purchaseText">~ ご購入はこちら ~</p>
            <purchase
              :amazon="content.purchase.amazon"
              :towerRecords="content.purchase.towerRecords"
              :diskUnion="content.purchase.diskUnion"
            />
          </div>
          <p v-if="content.notice" class="purchaseButtonList__notice">{{content.notice}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import purchase from "@/components/discography/purchase"
  import moment from "moment-timezone";
  moment.tz.setDefault('Asia/Tokyo')


  export default {
    name: "originalPickUp",
    components: {
      purchase
    },
    props: ['originalPickUpList'],
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
  .movie {
    width: 100%;
    height: 100%;
  }

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

  .originalPickUpConteiner {
    padding: 0;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,0.7357317927170868) 0%, rgba(0,0,0,0.8225665266106442) 35%, rgba(0,0,0,1) 100%);
  }

  .originalPickUp {
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
    font-size: 15pt;
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
    margin-bottom: 20px;
  }

  .price {
    font-size: 19px;
    margin-bottom: 0.4em;
  }

  .priceInTax {
    font-size: 15px;
    margin-bottom: 0.4em;
  }

  .purchase {
    margin-top: 35px;
  }

  .purchaseText {
    font-weight: bolder;
  }

  .label {
    font-size: 0.8em;
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
