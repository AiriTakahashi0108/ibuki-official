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
        <nuxt-link to="/news" class="menuLink">
          <p class="menuLinkTxt">NEWS<span class="--jp">- 新着情報 -</span></p>
        </nuxt-link>
        <nuxt-link to="/profile" class="menuLink">
          <p class="menuLinkTxt">PROFILE<span class="--jp">- 自己紹介 -</span></p>
        </nuxt-link>
        <div to="/discography" class="menuLink discography">
          <p class="menuLinkTxt">DISCOGRAPHY<span class="--jp">- CD・動画-</span></p>
        </div>
        <nuxt-link to="/schedule" class="menuLink">
          <p class="menuLinkTxt">SCHEDULE<span class="--jp">- ライブ・イベント情報 -</span></p>
        </nuxt-link>
        <nuxt-link to="/contact" class="menuLink">
          <p class="menuLinkTxt">CONTACT<span class="--jp">- お気軽にどうぞ -</span></p>
        </nuxt-link>
        <nuxt-link to="/" class="menuLink">
          <p class="menuLinkTxt">IBUKI's VOICE TRAINING</p>
        </nuxt-link>
      </nav>
    </div>
    <div class="discographyList">
      <nuxt-link to="/discography/original" class="discographyLink">ORIGINAL <span class="--jp">-オリジナル作品-</span>
      </nuxt-link>
      <nuxt-link to="/discography/request" class="discographyLink">REQUEST <span class="--jp">-依頼作品-</span>
      </nuxt-link>
      <nuxt-link to="/discography/cover" class="discographyLink">COVER <span class="--jp">-カバー動画-</span></nuxt-link>
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
    background: var(--basic-backColor-dark);
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

  .discographyList {
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(57, 57, 57, 0.66);
    flex-direction: column-reverse;
    display: flex;
    padding-top: 100px;
    z-index: 100;
  }
  .discographyLink {
    height: 30px;
    display: block;
    transition: all 0.3s;

    &:hover {
      text-shadow: 0px 0px 6px #121212;
      color: white;
      background: rgba(90, 90, 90, 0.66);
    }
  }
</style>
