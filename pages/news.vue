<template>
  <div class="newsContainer">
    <div class="news content">
      <pageTitle :title="pageTitle" :detail="pageDetail"/>
    </div>
  </div>
</template>


<style>
  .news {
    color: var(--basic-fontColor-dark);
  }
</style>
<script>
  import PageTitle from "@/components/parts/PageTitle";
  export default {
    components: {PageTitle},
    data() {
      return {
        pageTitle: "NEWS",
        pageDetail: "IBUKIの最新情報をお届けします",
      }
    }
  }
</script>
