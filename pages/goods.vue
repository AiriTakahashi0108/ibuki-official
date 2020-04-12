<template>
  <div class="profileContainer container">
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
        pageTitle: "GOODS",
        pageDetail: "グッズを通販にてお買い求めいただけます",
      }
    }
  }
</script>

<style>
  .profileContainer {
    color: var(--basic-fontColor-dark);
  }
</style>
