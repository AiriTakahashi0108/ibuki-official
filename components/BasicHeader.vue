<template>
  <div class="BasicHeader">
    <nav class="menu">
      <nuxt-link to="/" class="menuLink">
        <p class="menuLinkTxt">TOP<span class="--jp">- トップページ -</span></p>
      </nuxt-link>
      <nuxt-link to="/" class="menuLink">
        <p class="menuLinkTxt">NEWS<span class="--jp">- 新着情報 -</span></p>
      </nuxt-link>
      <nuxt-link to="/" class="menuLink">
        <p class="menuLinkTxt">PROFILE<span class="--jp">- 自己紹介 -</span></p>
      </nuxt-link>
      <nuxt-link to="/" class="menuLink">
        <p class="menuLinkTxt">DISCOGRAPHY<span class="--jp">- CD・動画 -</span></p>
      </nuxt-link>
      <nuxt-link to="/" class="menuLink">
        <p class="menuLinkTxt">SCHEDULE<span class="--jp">- ライブ・イベント情報 -</span></p>
      </nuxt-link>
      <nuxt-link to="/" class="menuLink">
        <p class="menuLinkTxt">CONTACT<span class="--jp">- お気軽にどうぞ -</span></p>
      </nuxt-link>
      <nuxt-link to="/" class="menuLink">
        <p class="menuLinkTxt">IBUKI's VOICE TRAINING</p>
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'BasicHeader',
  }

</script>

<style scoped>

  .BasicHeader {
    width: 100%;
    height: max-content;
    background: var(--basic-backColor);
    color: var(--basic-fontColor);
  }

  .menu {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    transition: all 0.7s;
    width: 70%;
    min-width: 1100px;
    text-align: center;
  }

  .menuLink {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    text-align: center;
    border: none;
    transition: all 0.7s;
  }

  .menuLinkTxt {
    font-size: 18px;
    width: max-content;
    line-height: 30px;
    transition: all 0.7s;
    padding: 15px 22px;
    margin: 0 auto -18px auto;
    &:hover {
      font-size: 22px;
      padding: 20px 22px;
      margin: 0 auto;
      & > .--jp {
        opacity: 1;
      }
    }

    & > .--jp {
      display: block;
      opacity: 0;
      font-size: 13px;
      line-height: 18px;
      color: var(--basic-fontColor-thin-1);
      transition: all 0.7s;
    }
  }

</style>
