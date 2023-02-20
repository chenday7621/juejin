<template>
  <div>
    <div>
      <nav >
        <ul >
          <li @click="go($route.params.index,0)" :class="{active:isActive==0}"><a>推荐</a></li>
          <li @click="go($route.params.index+'?sort=newest',1)" :class="{active:isActive==1}"><a>最新</a></li>
          <li @click="go($route.params.index+time_map[selected],2)" :class="{active:isActive==2}"><a>热榜</a></li>

        </ul>
        <select v-model="selected" v-show="isHot" @click="updateTime">
          <option value="0">3天内</option>
          <option value="1">7天内</option>
          <option value="2">30天内</option>
          <option value="3">全部</option>
        </select>
      </nav>

      <div>
        <nuxt-child/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selected:'0',
      time_map:['?sort=three_days_hottest','?sort=weekly_hottest','?sort=monthly_hottest','?sort=hottest'],
      isActive:0,
      isHot:false
    }
  },
  methods:{
    go(path,index){

      this.isActive=index

      if(this.isActive===2){
        this.isHot=true
      }else{
        this.isHot=false
      }
      this.$router.push('/'+path)
    },
    updateTime(e){
      console.log(e.target.value)
      this.$router.push(this.$route.params.index+this.time_map[this.selected])
    }
  }

}
</script>

<style scoped>
li{
  display: inline-block;
}
.active{
  color: red;
}
li:hover{
  cursor: pointer;
}
</style>
