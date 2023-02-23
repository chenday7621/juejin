<template>
  <div>
    <ul>
      <li v-for="item in $store.state.articles" :key="item.id" @click="go(item.id)">
        {{item.attributes.author}}
        {{item.attributes.public_time}}
        {{item.attributes.content}}
        <hr>
      </li>
    </ul>
    <div>
      <IndexSide/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index',
  async fetch(){
    let {data:{data}}=await axios.get('http://localhost:1337/api/essays')
    // console.log(data)
    this.$store.commit('updateArticles',data)
  },
  methods:{
    go(id){
      this.$store.commit('updateArticle',id)
      this.$router.push(`/essay/${id}`)
    }
  }
}
</script>

<style scoped>

</style>
