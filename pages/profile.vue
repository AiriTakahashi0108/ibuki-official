<template>
  <div class="profileContainer">
    <div class="profile content">
      <pageTitle :title="pageTitle" :detail="pageDetail"/>
    </div>
  </div>
</template>

<script>
  import PageTitle from "@/components/parts/PageTitle";

  export default {
    components: {PageTitle},
    data() {
      return {
        pageTitle: "PROFILE",
        pageDetail: "IBUKIのプロフィールや活動歴などを紹介します",
      }
    }
  }
</script>

<style scoped>
  .profileContainer {
    color: var(--basic-fontColor-dark);
  }
</style>
