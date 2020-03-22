<template>
  <div class="HeaderLogo">
    <img src="~assets/images/ibuki_logo_txt.svg" alt="">
    <p>~official web site~</p>
  </div>
</template>

<script>
  export default {
    name: 'HeaderLogo',
  }
</script>

<style>
.HeaderLogo {
  display: flex;
  align-items: baseline;
  height: 30px;

  & > img {
    height: 100%;
    margin-right: 10px;
  }

  & > p {
    transform: translateY(-6px);
    font-size: 18px;
    margin: 0 auto;
  }
}

</style>
