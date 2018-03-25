<template>
  <div class="card">
    <div class="card-content">
      <slot name="title"></slot>
      <slot name="body"></slot>
    </div>
  </div>
</template>
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
