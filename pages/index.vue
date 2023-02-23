<template>
  <div>
    <nav>
      <ul class="nav">
        <li v-for="(value,index) in $store.state.tab2_categories" :key="value.attributes.ENname" @click="go(value.attributes.ENname)">
          <a :class="{active:isActive===value.attributes.ENname}">{{value.attributes.CNname}}</a>
        </li>
        <li class="nav_item">
          <a href="">标签管理</a>
        </li>
      </ul>
    </nav>
    <div>
      <div>
        <nuxt-child/>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async fetch () {
    let data = await axios.get('http://localhost:1337/api/tab-twos')
    let TabTwo_info=data.data.data
    this.$store.commit('updateTabTwo',TabTwo_info)
    console.log(this.$store.state.tab2_categories)
  },
  data(){
    return{
      tab2_categories:this.$store.state.tab2_categories,
      isActive:'recommended'
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
  /*box-shadow: 0 1px 1px 1px rgb(233, 234, 234);*/
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
