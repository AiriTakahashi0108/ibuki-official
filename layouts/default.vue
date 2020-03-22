<template>
  <div>
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
    components: { BasicHeader}
  }
</script>

<style>
  body {
    color: var(--basic-fontColor-light);
  }

  :root {
    --basic-fontColor-light: #fff;
    --basic-fontColor-light-thin-1: #c1c1c1;
    --basic-fontColor-dark: #121212;


    --basic-backColor-dark: #000;
  }

  .content {
    max-width: 1100px;
    width: 100%;
    padding: 30px;
    margin: 0 auto;
  }

  .mainContents{
    position: absolute;
    top: 70px;
    width: 100vw;
  }
</style>
