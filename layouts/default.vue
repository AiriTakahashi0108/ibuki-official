<template>
  <div class="wrapper">
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v6.0&appId=570179513117450&autoLogAppEvents=1"></script>
    <BasicHeader/>
    <main class="mainContents">
      <nuxt/>
    </main>
  </div>
</template>

<script>
  import BasicHeader from "@/components/BasicHeader";

  export default {
    name:'default',
    components: { BasicHeader },
  }
</script>

<style>
  /*設定*/
  body {
    color: var(--basic-fontColor-light);
    font-size: 17px;
    font-family: "Noto Sans CJK JP", sans-serif;
  }

  a, a:active, a:visited, .nuxt-link-exact-active, .nuxt-link-active{
    text-decoration: none;
    border: none;
    color: inherit;
    border-bottom-color:none;
  }

  h1,h2,h3,h4,h5,h6 {
    color: unset;
    font-family: Arial, Helvetica, sans-serif;
  }

  :root {
    --basic-fontColor-light: #fff;
    --basic-fontColor-light-thin-1: #c1c1c1;
    --basic-fontColor-dark: #121212;


    --basic-backColor-dark: rgba(0, 0, 0, 0.65);
    --header-minHeight: 69px;
  }

  /*このページのスタイル*/
  .mainContents{
    padding-top: var(--header-minHeight);
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    background: linear-gradient(110.42731717338631deg, rgba(153, 153, 153,1) 10.059027777777779%,rgba(154, 154, 154,1) 10.059027777777779%,rgba(171, 171, 171,1) 15.03125%,rgba(186, 186, 186,1) 27.461805555555557%,rgba(153, 153, 153,1) 50.45833333333333%,rgba(138, 138, 138,1) 59.936631944444436%,rgba(107, 107, 107,1) 82.15625%,rgba(107, 107, 107,1) 84.6423611111111%);
  }

  .container {
    padding: 0 20px;
  }

  .content {
    max-width: 1100px;
    width: 100%;
    height: 100%;
    min-height: calc(100vh - var(--header-minHeight));
    padding: 30px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.73);
    color: var(--basic-fontColor-dark);
  }
</style>
