<template>
  <div>
    <BasicHeader/>
    <main>
      <nuxt/>
      <BasicFooter/>
    </main>
  </div>
</template>

<script>
  import BasicHeader from "@/components/BasicHeader";
  import BasicFooter from "@/components/BasicFooter";

  export default {
    name:'default',
    components: {BasicFooter, BasicHeader}
  }
</script>

<style>
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  :root {
    --basic-fontColor: #fff;
    --basic-fontColor-thin-1: #c1c1c1;

    --basic-backColor: #000;
    --header-height: 56px;
  }
</style>
