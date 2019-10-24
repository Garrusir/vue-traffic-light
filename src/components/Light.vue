<template>
  <div class="light" :class="[lightColor, {'active': active}, {'blink': active && time <= 3000}]">
    <div v-if="active" class="time">
      {{time | sec}}
    </div>
  </div>

</template>
<script>
  export default {
    data: ()=>({
    }),
    props: ['lightColor', 'active', 'time']
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
    display: flex;
    justify-content: center;
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
  .active + .red {
    box-shadow: 0 0 5px 5px #dd2c00;

  }
  .blink {
    animation: 1s ease-in infinite blink;
  }
  .time {
    text-align: center;
    font-size: 3rem;
    align-self: center; 
  }
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }

</style>