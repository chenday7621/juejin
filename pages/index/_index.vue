<template>
  <div>
    <div>
      <nav>
        <ul>
          <li><nuxt-link :to="'/'+$route.params.index">推荐</nuxt-link></li>
          <li><nuxt-link :to="'/'+$route.params.index+'?sort=newest'">最新</nuxt-link></li>
          <li><nuxt-link :to="'/'+$route.params.index+time_map[selected]">热榜</nuxt-link></li>
        </ul>
        <select v-model="selected">
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
      selected:'1',
      time_map:['?sort=three_days_hottest','?sort=weekly_hottest','?sort=monthly_hottest','?sort=hottest'],
    }
  }

}
</script>

<style scoped>
ul li{
  display: inline-block;
}
</style>
