<template>
  <div class="light" :class="[lightColor, {'active': active}]">

  </div>

</template>
<script>
  export default {
    data: ()=>({
    }),
    props: ['lightColor', 'active']
  }
</script>
<style scoped>
  .light {
    width: 100px;
    height: 100px;
    background-color: #ccc;
    opacity: .3;
    border-radius: 50%;
    margin: 5px auto;
  }
  .red {
    background-color: #dd2c00;
  }
  .yellow {
    background-color: #ffff5a;
  }
  .green {
    background-color: #00e676;
  }
  .active {
    opacity: 1;
  }
</style>