<template>
  <div class="traffic-light">
    <div class="wrap">
      <app-light lightColor="red" :active="color=='red'" :time="counter"></app-light>
      <app-light lightColor="yellow" :active="color=='yellow'" :time="counter"></app-light>
      <app-light lightColor="green" :active="color=='green'" :time="counter"></app-light>
    </div>
    <div v-if="!saved" class="btn success" @click="save">Сохранить состояние</div>
    <div v-else class="btn danger" @click="remove">Удалить состояние</div>
  </div>
</template>
<script>
  import Light from "../components/Light.vue"
  export default {
    data: ()=>({
      prev: null,
      intervalId: null,
      color: null,
      counter: null,
      saved: false
    }),
    methods:{
      save(){
        this.saved = !this.saved;
        localStorage.prev = this.prev;
        localStorage.color = this.color;
        localStorage.counter = this.counter
      },
      remove(){
        this.saved = !this.saved;
        localStorage.removeItem('prev');
        localStorage.removeItem('color');
        localStorage.removeItem('counter');
      }
    },
    computed: {
      time(){
          return this.$route.meta.time;
        },
      nextRoute(){
        if (this.color === 'red' || this.color === 'green'){
          return 'yellow'
        } else {
          if (this.prev === 'green') {
            return 'red' 
          } else return 'green'
        }
      },
    },
    components: {
      appLight: Light,
    },
    mounted(){
       if (localStorage.color) {
         if (this.$route.meta.color !== localStorage.color) {
          this.$router.push(`/${localStorage.color}`)
         }
        this.color = localStorage.color;
        this.saved = true;
      } else {
      this.color = this.$route.meta.color;
      }

      if (localStorage.counter) {
        this.counter = localStorage.counter;
      } else {
        this.counter = this.$route.meta.time;
      }


      this.intervalId = setInterval(()=>{
        if (this.counter <= 0) {
          console.log(this.nextRoute)
          this.$router.push(`/${this.nextRoute}`)
        }
        this.counter -= 1000;
      }, 1000)

    },

    beforeRouteLeave(to, from, next){
      this.prev = from.meta.color;
      this.counter = to.meta.time;
      this.color = to.meta.color;
      next();
    }
  }
</script>

<style>
    .wrap {
    width: 120px;
    padding: 5px;
    border-radius: 10px;
    background-color: #929292;
    margin-bottom: 30px;
  }
  .btn {
    width: 120px;
    margin-top: 5px;
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    color: #f2f2f2;
    transition: all .3 ease;
  }
  .btn:hover {
    box-shadow: 0 0 5px  rgba(0,0,0,.4);
  }
  .btn:active {
    box-shadow: none;
  }
  .success {
    background-color: #00e676;
  }
  .danger {
    background-color: #dd2c00;
  }
</style>