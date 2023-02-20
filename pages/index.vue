<template>
  <div>
    <nav>
      <ul class="nav">
        <li v-for="(value,key) in tab2_categories" :key="value" @click="go(value)">
          <a :class="{active:isActive===value}">{{value}}</a>
        </li>
        <li class="nav_item">
          <a href="">标签管理</a>
        </li>
      </ul>

    </nav>
    <div>
      <nuxt-child/>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tab2_categories:{
        '综合':'综合',
        '后端':'后端',
        '前端':'前端',
        'Android':'Android',
        'IOS':'IOS',
        '人工智能':'人工智能',
        '开发工具':'开发工具',
        '代码人生':'代码人生',
        '阅读':'阅读'
      },
      isActive:'综合'
    }
  },
  methods:{
    go(value){
      this.isActive=value
      this.$router.push('/'+value)
    }
  }

}
</script>
<style scoped>
*{
  text-decoration: none;
  list-style: none;
}
nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 270px;
  height: 50px;
}
.nav_item{
  padding-left: 243px;
}
li{
  display: inline-block;
}
.active{
  color: rgb(17,113,238);
}
a{
  color: black;
}
a:hover{
  cursor: pointer;
}
</style>
