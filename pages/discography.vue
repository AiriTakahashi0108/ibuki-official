<template>
  <div class="discographyContainer container">
    <div class="content">
      <div class="discography">
        <pageTitle :title="pageTitle" :detail="pageDetail"/>

        <nav>
          <button @click.prevent="isActive = 1">PICK UP</button>
          <button @click.prevent="isActive = 2">ORIGINAL</button>
          <button @click.prevent="isActive = 3">REQUEST</button>
          <button @click.prevent="isActive = 4">COVER</button>
        </nav>

        <div>
          <PickUp :pickUpList="original.pickUpList" v-show="isActive === 1"></PickUp>
          <Original :originalList="original.list" v-show="isActive === 2">2</Original>
          <div v-show="isActive === 3">3</div>
          <div v-show="isActive === 4">4</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import PageTitle from "@/components/parts/PageTitle";

  import PickUp from "@/components/discography/PickUp";
  import Original from "@/components/discography/Original";
  import Request from "@/components/discography/Request";

  export default {
    name: "discography",
    components: {
      PageTitle,
      PickUp,
      Original,
      Request,
    },
    created() {
      // if(original.pickUpList || request.pickUpList) {
      //   this.isActive = 1
      // } else {
      //   this.isActive = 2
      // }
    },
    data() {
      return {
        pageTitle: 'DISCOGRAPHY',
        pageDetail: "作品を紹介します",
        isActive: 1,
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
  .sectionTitle {
    position: relative;
    margin: 0;
    padding: 10px 10px 10px 30px;
    font: bold 22px/1.2 Arial, Helvetica, sans-serif;
    color: #666;
    background: #ccc;
    border-top: #ccc solid 1px;
    border-right: #999 solid 1px;
    border-bottom: #999 solid 1px;
    border-left: #ccc solid 1px;
    text-shadow: 1px 1px 0 rgba(255, 255, 255, 1);
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.5) inset;
    background-image: -webkit-gradient(linear, left top, left bottom,
    from(rgba(220, 220, 220, 1.0)),
    color-stop(0.25, rgba(240, 240, 240, 1.0)),
    color-stop(0.30, rgba(235, 235, 235, 1.0)),
    color-stop(0.36, rgba(240, 240, 240, 1.0)),
    color-stop(0.50, rgba(235, 235, 235, 1.0)),
    color-stop(0.80, rgba(215, 215, 215, 1.0)),
    to(rgba(210, 210, 210, 1.0))
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
      content: " ";
      position: absolute;
      top: 0;
      left: 15px;
      width: 0;
      height: 100%;
      border-left: #ccc solid 1px;
    }

    &:after {
      content: " ";
      position: absolute;
      top: 0;
      left: 16px;
      width: 0;
      height: 100%;
      border-right: #eee solid 1px;
    }
  }
</style>
