<template>
  <div class="BasicHeaderWrapper">
    <div class="BasicHeader">
      <nuxt-link to="/">
        <HeaderLogo class="logo"/>
      </nuxt-link>
      <nav class="menu">
        <nuxt-link to="/" class="menuLink">
          <p class="menuLinkTxt">TOP<span class="--jp">- トップページ -</span></p>
        </nuxt-link>
        <nuxt-link class="menuLink" to="/profile">
          <p class="menuLinkTxt">PROFILE<span class="--jp">- 自己紹介 -</span></p>
        </nuxt-link>
        <nuxt-link to="/discography" class="menuLink">
          <p class="menuLinkTxt">DISCOGRAPHY<span class="--jp">- CD・動画-</span></p>
        </nuxt-link>
        <nuxt-link to="/schedule" class="menuLink">
          <p class="menuLinkTxt">SCHEDULE<span class="--jp">- ライブ・イベント情報 -</span></p>
        </nuxt-link>
        <nuxt-link to="/media" class="menuLink">
          <p class="menuLinkTxt">MEDIA<span class="--jp">- メディア情報 -</span></p>
        </nuxt-link>
        <nuxt-link to="/contact" class="menuLink">
          <p class="menuLinkTxt">CONTACT<span class="--jp">- お気軽にどうぞ -</span></p>
        </nuxt-link>
        <nuxt-link to="/" class="menuLink">
          <p class="menuLinkTxt">IBUKI's VOICE TRAINING</p>
        </nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script>
  import HeaderLogo from '@/components/parts/HeaderLogo'

  export default {
    name: 'BasicHeader',
    components: {
      HeaderLogo,
    }
  }
</script>

<style scoped>
  .BasicHeaderWrapper {
    position: relative;
  }

  .BasicHeader {
    width: 100vw;
    height: max-content;
    background: black;
    color: var(--basic-fontColor-light);
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
    text-align: center;
    align-items: center;
    min-width: 1100px;
  }

  .menuLink {
    display: inline-block;
    text-align: center;
    transition: all 0.7s;
  }

  .menuLinkTxt {
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
      color: var(--basic-fontColor-light-thin-1);
      transition: all 0.7s;
      position: absolute;
      top: 47px;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
    }
  }

</style>
