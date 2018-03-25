<template>
    <div class="card">
    <div class="card-content">
      <slot name="title"></slot>
      <slot name="url"></slot>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" :href="thumbnailUrl"
      target="_blank">Read More</a>
    </footer>
  </div>
</template>
<script>
  export default {
    props: ['thumbnailUrl']
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