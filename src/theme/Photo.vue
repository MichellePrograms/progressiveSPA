<template>
    <div class="card">
    <div class="card-content">
      <slot name="title"></slot>
      <slot name="thumbnailUrl"></slot>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" :href="url"
      target="_blank">View Picture</a>
    </footer>
  </div>
</template>
<script>
  export default {
    props: ['url']
  }
</script>
<style scoped>
  .card{
    padding-bottom: 40px;
    height:100%;
  }
  footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
  }
</style>