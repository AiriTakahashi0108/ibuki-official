<template>
  <div class="pageTitle">
    <h2>{{ title }}</h2>
    <p>- {{ detail }} -</p>
  </div>
</template>

<script>
  export default {
    name:'PageTitle',
    props:['title', 'detail']
  }
</script>
