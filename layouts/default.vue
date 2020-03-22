<template>
  <div>
    <BasicHeader/>
    <main>
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

  :root {
    --basic-fontColor: #fff;
    --basic-fontColor-thin-1: #c1c1c1;

    --basic-backColor: #000;
  }

  content {
    max-width: 1100px;
    width: 100%;
    padding: 30px;
  }
</style>
