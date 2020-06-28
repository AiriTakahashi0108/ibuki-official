<template>
  <div class="discographyContainer container">
    <div class="discography content">
      <aside class="sideMenu">

      </aside>
      <pageTitle :title="pageTitle" :detail="pageDetail"/>
      <!-- ピックアップ -->
      <OriginalPickUp :originalPickUpList="original.pickUpList"/>
      <!--オリジナル-->
      <div>
        <h3 class="sectionTitle">ORIGINAL<span>- オリジナル作品 -</span></h3>

<!--        <h4>Recommend</h4>-->
<!--        <OriginalRecommend :originalRecommendList="original.recommendList"/>-->

<!--        <h4>other</h4>-->

<!--        <Original :originalList="original.List"/>-->
      </div>

      <!--参加作品-->
      <div>
        <h3 class="sectionTitle">REQUEST<span>- 参加作品 -</span></h3>
<!--        <h4>Recommend</h4>-->
<!--        <RequestRecommend :requestRecommendList="request.recommendList"/>-->

<!--        <h4>other</h4>-->
<!--        <Request :requestList="request.list"/>-->
      </div>

      <!--カバー動画-->
<!--      <div>-->
<!--        <h3>COVER<span>- カバー動画 -</span></h3>-->
<!--        <h4>Recommend</h4>-->
<!--      </div>-->

    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import PageTitle from "@/components/parts/PageTitle";

  import OriginalPickUp from "@/components/discography/OriginalPickUp";
  import Original from "@/components/discography/Original";
  import OriginalRecommend from "@/components/discography/OriginalRecommend";
  import Request from "@/components/discography/Request";
  import RequestRecommend from "@/components/discography/RequestRecommend";

  export default {
    name: "discography",
    components: {
      PageTitle,
      OriginalPickUp,
      Original,
      OriginalRecommend,
      Request,
      RequestRecommend,
    },
    data() {
      return {
        pageTitle: 'DISCOGRAPHY',
        pageDetail: "作品を紹介します"
      }
    },
    computed: {
      ...mapGetters({
        original: 'discography/original',
        request: 'discography/request',
        cover: 'discography/cover',
      }),
    },
  }
</script>

<style scoped>
  .discographyContainer {
    display: flex;
  }

  .sideMenu {
    width: 230px;
    height: 100vh;
    position: fixed;
    background-color: #2b2b2b;
    left: 0;
    top: 0;
  }

  .discography {
    padding-left: calc(30px + 230px);
    margin: 0 auto;
    max-width: 1300px;
    position: relative;
  }

  .sectionTitle {
    position:relative;
    margin:0;
    padding:10px 10px 10px 30px;
    font:bold 22px/1.2 Arial, Helvetica, sans-serif;
    color:#666;
    background:#ccc;
    border-top:#ccc solid 1px;
    border-right:#999 solid 1px;
    border-bottom:#999 solid 1px;
    border-left:#ccc solid 1px;
    text-shadow:1px 1px 0 rgba(255,255,255,1);
    box-shadow:
      0 0 0 1px rgba(255,255,255,0.5) inset;
    background-image: -webkit-gradient(linear, left top, left bottom,
    from(			 rgba(220, 220, 220, 1.0)),
    color-stop(0.25, rgba(240, 240, 240, 1.0)),
    color-stop(0.30, rgba(235, 235, 235, 1.0)),
    color-stop(0.36, rgba(240, 240, 240, 1.0)),
    color-stop(0.50, rgba(235, 235, 235, 1.0)),
    color-stop(0.80, rgba(215, 215, 215, 1.0)),
    to(				 rgba(210, 210, 210, 1.0))
    );
    background-image: -webkit-linear-gradient(top,
    rgba(220, 220, 220, 1.0),
    rgba(240, 240, 240, 1.0) 25%,
    rgba(235, 235, 235, 1.0) 30%,
    rgba(240, 240, 240, 1.0) 36%,
    rgba(235, 235, 235, 1.0) 50%,
    rgba(215, 215, 215, 1.0) 80%,
    rgba(210, 210, 210, 1.0)
    );
    background-image: -moz-linear-gradient(top,
    rgba(220, 220, 220, 1.0),
    rgba(240, 240, 240, 1.0) 25%,
    rgba(235, 235, 235, 1.0) 30%,
    rgba(240, 240, 240, 1.0) 36%,
    rgba(235, 235, 235, 1.0) 50%,
    rgba(215, 215, 215, 1.0) 80%,
    rgba(210, 210, 210, 1.0)
    );
    background-image: -o-linear-gradient(top,
    rgba(220, 220, 220, 1.0),
    rgba(240, 240, 240, 1.0) 25%,
    rgba(235, 235, 235, 1.0) 30%,
    rgba(240, 240, 240, 1.0) 36%,
    rgba(235, 235, 235, 1.0) 50%,
    rgba(215, 215, 215, 1.0) 80%,
    rgba(210, 210, 210, 1.0)
    );
    background-image: linear-gradient(to bottom,
    rgba(220, 220, 220, 1.0),
    rgba(240, 240, 240, 1.0) 25%,
    rgba(235, 235, 235, 1.0) 30%,
    rgba(240, 240, 240, 1.0) 36%,
    rgba(235, 235, 235, 1.0) 50%,
    rgba(215, 215, 215, 1.0) 80%,
    rgba(210, 210, 210, 1.0)
    );
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
</style>
