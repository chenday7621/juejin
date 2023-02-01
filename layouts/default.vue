<template>
  <div>
    <nav>
      <ul v-for="c in tab1_categories" :key="c.index">
        <li><nuxt-link to="/">{{c}}</nuxt-link></li>
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
      tab1_categories:['首页','沸点','课程','直播','活动','竞赛','商城','APP','插件']
    }
  }
}
</script>

<style scoped>
*{
  text-decoration: none;
  list-style: none;
}
ul{
  display: inline-block;
}
</style>
