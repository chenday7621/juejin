<template>
  <div>
    <nav>
      <ul>
        <li v-for="(value,key) in tab2_categories" :key="value" @click="go(value)">
          <a :class="{active:isActive===value}">{{value}}</a>
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
        '综合':'recommend',
        '后端':'backend',
        '前端':'frontend',
        'Android':'android',
        'IOS':'ios',
        '人工智能':'ai',
        '开发工具':'freebie',
        '代码人生':'career',
        '阅读':'article'
      },
      isActive:'recommend'
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
