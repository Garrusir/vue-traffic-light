<template>
  <div class="wrap">
    <app-light lightColor="red" :active="color=='red'"></app-light>
    <app-light lightColor="yellow" :active="color=='yellow'"></app-light>
    <app-light lightColor="green" :active="color=='green'"></app-light>
    <app-timer :time="time"></app-timer>
  </div>
</template>
<script>
  import Light from "../components/Light.vue"
  import Timer from "../components/Timer.vue"
  export default {
    data: ()=>({
      timeoutId: null,
      prev: null,
      timer: null,
      intervalId: null
    }),
    computed: {
      color(){
        return this.$route.meta.color
      },
      time(){
        return this.$route.meta.time
      },
      nextRoute(){
        if (this.color === 'red' || this.color === 'green'){
          return 'yellow'
        } else {
          if (this.prev === 'green') {
            return 'red' 
          } else return 'green'
        }
      }
    },
    methods:{
      setTimer(){
        this.timeoutId = setTimeout(()=>{
        this.$router.push(`/${this.nextRoute}`)
        }, this.time)
      }
    },
    components: {
      appLight: Light,
      appTimer: Timer
    },
    mounted(){
      this.setTimer();

    },
    updated(){
      this.setTimer()
    },
    beforeRouteLeave(to, from, next){
      this.prev = from.meta.color

      next();
    }
  }
</script>

<style>
    .wrap {
    width: 120px;
    padding: 5px;
    border-radius: 10px;
    background-color: #ccc;
  }
</style>