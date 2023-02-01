<template>
<div>
  <h1>文章列表</h1>
  <router-link to="/essay">
    <button>点击进入文章详情页</button>
  </router-link>
  <IndexSide/>
</div>
</template>

<script>
export default {
  name: 'index',
  methods:{
    toEssay(){
    this.$route.push('/essay')
    }
  }
}
</script>

<style scoped>

</style>
