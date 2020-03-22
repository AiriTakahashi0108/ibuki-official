<template>
  <div class="profileContainer">
    <div class="profile content">
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
        pageTitle: "REQUEST",
        pageDetail: "たくさんの作品に参加させていただきました",
      }
    }
  }
</script>
