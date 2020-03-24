<template>
  <div class="scheduleContainer">
    <div class="schedule content">
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
        pageTitle: "SCHEDULE",
        pageDetail: "ライブ・イベント・リリースなどの情報です",
      }
    }
  }
</script>

<style>
  .scheduleContainer {
    color: var(--basic-fontColor-dark);
  }
</style>
