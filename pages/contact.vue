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
        pageTitle: "CONTACT",
        pageDetail: "ファンメッセージ・出演依頼などお気軽にどうぞ",
      }
    }
  }
</script>

<style>
  .profileContainer {
    color: var(--basic-fontColor-dark);
  }
</style>
