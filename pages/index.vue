<template>
  <div class="backgroundFix">
    <div class="contentsContainer">
      <div class="firstView">
        <FirstViewLogo class="firstView-logo"/>
      </div>
      <div class="backgroundOpacity">
        <div class="news content">
          テスト
        </div>
      </div>
      <BasicFooter/>
    </div>
  </div>
</template>

<script>
  import FirstViewLogo from "@/components/FirsrViewLogo";
  import BasicFooter from "@/components/BasicFooter";


  export default {
    components: {FirstViewLogo, BasicFooter}
  }
</script>

<style>
  .backgroundFix {
    width: 100vw;
    height: 100vh;
    background: url(~assets/images/firstView.jpg);
    background-size: cover;
    background-position: center;
    position: fixed;
    position: relative;
  }

  .contentsContainer {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: scroll;
  }

  .firstView {
    height: 100vh;
    width: 100vw;
  }

  .firstView-logo {
    width: 35%;
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
  }

  .backgroundOpacity {
    width: 100vw;
    height: fit-content;
    background: rgba(0, 0, 0, 0.7);
  }

  .news {
    height: 1000px;
  }
</style>
