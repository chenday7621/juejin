<template>
  <div>
    <nav>
      <ul v-for="(value,key) in tab2_categories" :key="value">
        <li><nuxt-link :to="'/'+value">{{key}}</nuxt-link></li>
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
      // tab2_categories:['综合','后端','前端','Android','IOS','人工智能','开发工具','代码人生','阅读']
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
      }
    }
  }
}
</script>
<style>
*{
  text-decoration: none;
  list-style: none;
}
ul{
  display: inline-block;
}
.nuxt-link-exact-active{
  color: brown;
}
</style>
