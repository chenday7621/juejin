<template>
  <div>
    <div class="main-body">
      <main class="article_body">
        <essay-info :id="id"/>
        <essay-side :id="id"/>
      </main>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'essay',
  data(){
    return{
      id:this.$route.params.id,
      article:{}
    }
  },
  async fetch(){
    // console.log(this.id)
    let {data:{data:article}}=await axios.get('http://localhost:1337/api/essays/'+this.id)
    this.$store.commit('updateArticle',article)
    for(let i=0;i<article.length;i++){
      if(i.id===this.id){
        console.log(i)
        break
      }
    }
  },



}
</script>

<style>

.main-body {
  background-color: #f4f5f5;
  padding-top: 10px;
}
.article_body {
  position: relative;
  margin: 1.767rem auto;
  max-width: 1140px;
  padding-right: 320px;
  /* margin-top: 40px; */
}
</style>
