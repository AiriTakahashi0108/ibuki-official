<template>
  <div class="discographyContainer container">
    <div class="content">
      <div class="discography">
        <pageTitle :title="pageTitle" :detail="pageDetail"/>

        <nav>
          <nuxt-link to="/discography">PICK UP</nuxt-link>
          <nuxt-link to="/discography/original">ORIGINAL</nuxt-link>
          <nuxt-link to="/discography/request">REQUEST</nuxt-link>
          <nuxt-link to="/discography/cover">COVER</nuxt-link>
        </nav>

        <nuxt-child></nuxt-child>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import PageTitle from "@/components/parts/PageTitle";

  export default {
    name: "discography",
    components: {
    },
    data() {
      return {
        pageTitle: 'DISCOGRAPHY',
        pageDetail: "作品を紹介します",
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
