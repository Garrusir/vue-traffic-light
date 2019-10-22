<template>
  <h1>{{localTime}}</h1>
</template>
<script>
  export default{
    data() {
      return {
        intervalId: null,
        localTime: null
      }
    },
    props: ['time'],
    mounted() {
      console.log('mounted timer')
      this.localTime = this.time
      // this.sec = this.time;
      this.intervalId = setInterval(()=>{
        this.localTime -= 1000;
        if (this.localTime === 0){
          console.log('clear');
          clearInterval(this.intervalId)
          this.localTime = this.time
        }
      },1000)
    },
    // updated(){
    //   console.log('updated');
    //   clearInterval(this.intervalId);
    // }
  }
</script>