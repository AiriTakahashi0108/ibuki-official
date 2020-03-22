<template>
  <div class="BasicHeader">
    <nuxt-link to="/"><HeaderLogo class="logo"/></nuxt-link>
    <nav class="menu">
      <nuxt-link to="/" class="menu-link">
        <p class="menu-link-txt">TOP<span class="--jp">- トップページ -</span></p>
      </nuxt-link>
      <nuxt-link to="/" class="menu-link">
        <p class="menu-link-txt">NEWS<span class="--jp">- 新着情報 -</span></p>
      </nuxt-link>
      <nuxt-link to="/" class="menu-link">
        <p class="menu-link-txt">PROFILE<span class="--jp">- 自己紹介 -</span></p>
      </nuxt-link>
      <nuxt-link to="/" class="menu-link">
        <p class="menu-link-txt">DISCOGRAPHY<span class="--jp">- CD・動画-</span></p>
      </nuxt-link>
      <nuxt-link to="/" class="menu-link">
        <p class="menu-link-txt">SCHEDULE<span class="--jp">- ライブ・イベント情報 -</span></p>
      </nuxt-link>
      <nuxt-link to="/" class="menu-link">
        <p class="menu-link-txt">CONTACT<span class="--jp">- お気軽にどうぞ -</span></p>
      </nuxt-link>
      <nuxt-link to="/" class="menu-link">
        <p class="menu-link-txt">IBUKI's VOICE TRAINING</p>
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
  import HeaderLogo from '@/components/HeaderLogo'

  export default {
    name: 'BasicHeader',
    components: {
      HeaderLogo,
    }
  }
</script>

<style scoped>

  .BasicHeader {
    width: 100%;
    height: max-content;
    background: var(--basic-backColor);
    color: var(--basic-fontColor);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 999;
  }

  .logo {
    margin-left: 20px;
  }

  .menu {
    list-style: none;
    display: flex;
    justify-content: space-between;
    transition: all 0.7s;
    width: 70%;
    min-width: 1100px;
    text-align: center;
    align-items: center;
  }
  .menu-link {
    display: inline-block;
    text-align: center;
    transition: all 0.7s;
  }
  .menu-link-txt {
    font-size: 18px;
    width: max-content;
    line-height: 30px;
    transition: all 0.7s;
    padding: 20px 22px;
    margin: 0 auto;
    position: relative;
    &:hover {
      font-size: 22px;
      padding: 20px 22px 35px 22px;
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
      position: absolute;
      top: 47px;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
    }
  }

</style>
