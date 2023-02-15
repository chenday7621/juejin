<template>
  <div>
    <nav>
      <ul>
        <li v-for="(item,index) in tab1_categories" :key="index" @click="go('/',index)">
          <a :class="{active:isActive===index}">{{item}}</a>
        </li>
      </ul>
    </nav>
    <div>
      <nuxt/>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tab1_categories:['首页','沸点','课程','直播','活动','竞赛','商城','APP','插件'],
      isActive:0
    }
  },
  methods:{
    go(path,index){
      this.isActive=index
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
*{
  text-decoration: none;
  list-style: none;
}
li{
  display: inline-block;
}
.active{
  color: red;
}
a:hover{
  cursor: pointer;
}
</style>
