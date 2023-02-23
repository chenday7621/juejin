<template>
  <div class="nav">
    <div class="header">
      <a href="" class="logo">
        <img
          src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
          alt=""
        />
      </a>
      <nav class="header_nav">
        <ul class="nav_list">
          <li
            v-for="(item,index) in $store.state.tab1_categories"
            :key="index"
            @click="go('/', index)"
          >
            <a :class="{ active: isActive === index }">{{ item.attributes.name}}</a>
            <!--            <div v-show="item.attributes.hasLabel" class="advertise">-->
            <span class="label label-danger">{{item.attributes.labelName}}</span>
            <!--            </div>-->
          </li>

        </ul>
        <ul class="nav_user">
          <li class="nav_search">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="探索稀土掘金"
              />
              <div class="input_icon">
                <img
                  src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li class="btn-container">
            <div class="btn-group">
              <button type="button" class="btn btn-info" id="btn-info1">
                创作者中心
              </button>
              <button
                type="button"
                class="btn btn-info dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                id="btn-info2"
              >
                <span class="caret"></span>
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a href="#"
                  ><span class="glyphicon glyphicon-pencil"></span>写文章</a
                  >
                </li>
                <li>
                  <a href="#"
                  ><span class="glyphicon glyphicon-dashboard"></span
                  >发沸点</a
                  >
                </li>
                <li>
                  <a href="#"
                  ><span class="glyphicon glyphicon-book"></span>写笔记</a
                  >
                </li>
                <li>
                  <a href="#"
                  ><span class="glyphicon glyphicon-menu-down"></span
                  >写代码</a
                  >
                </li>
                <li>
                  <a href=""
                  ><span class="glyphicon glyphicon-download-alt"></span
                  >草稿箱</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li>
            <img
              src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg"
              alt=""
            />
            <a href="" id="vip">会员</a>
          </li>
          <li>
            <a href=""> 消息 </a>
          </li>
          <li>
            <a href=""
            ><img class="head-picture"
                  src="https://p3-passport.byteimg.com/img/user-avatar/8833cebec90863a00e6600f9626a7b97~100x100.awebp"
                  alt=""
            /></a>
          </li>
        </ul>
      </nav>
    </div>
    <div>
      <nuxt />
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  async fetch () {
    let data = await axios.get('http://localhost:1337/api/tab-ones')
    console.log(data.data.data)
    let TabOne_info=data.data.data
    this.$store.commit('updateTabOne',TabOne_info)

  },
  data() {
    return {
      tab1_categories: this.$store.state.tab1_categories,
      isActive: 0,
    };
  },
  methods: {
    go(path, index) {
      this.isActive = index;
      this.$router.push(path);
    },
  }
};
</script>
<style scoped>
li {
  list-style-type: none;
}
a {
  text-decoration: none !important;
}
[v-cloak] {
  display: none;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.nav {
  width: 100%;
  height: 61px;
  border-bottom: 2px solid #f1f1f1;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 250;
}
.header {
  width: 1440px;
  margin: 0 auto;
  /*height: 100%;*/
  height: 62px;
  display: flex;
  align-items: center;
}
.header a {
  margin: 0 12px 0 24px;
  cursor: pointer;
}
.header_nav {
  height: 100%;
  width: 1297px;
  display: flex;
}
.nav_list li :hover {
  border-bottom: 2px solid rgb(30, 143, 255);
  color: #696d70;
}



.logo {
  width: 107px;
  height: 22px;
}

.logo img {
  height: 22px;
  margin-right: 5px;
}
.nav_user {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 30px auto;
}
.nav_list {
  display: flex;
  width: 550px;
}
.nav_search {
  position: relative;
  padding-right: 12px;
  width: 374px;
  display: flex;
  align-items: center;
}
.nav_search input {
  width: 362px;
  outline: none;
  border: none;
  padding-left: 12px;
  font-size: 13px;
  color: #8a919f;
  background-color: transparent;
}
.input-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 362px;
  height: 36px;
  border: 1px solid #c2c8d1;
  border-radius: 4px;
  line-height: 36px;
}
.input_icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 30px;
  background: #f2f3f5;
  border-radius: 3px;
  margin: 0 2px;
  cursor: pointer;
}
#btn-info1 {
  color: #fff;
  background-color: rgb(30, 128, 255);
  border-color: rgb(30, 128, 255);
  width: 88px;
  height: 28px;
}
#btn-info2 {
  color: #fff;
  background-color: rgb(30, 128, 255);
  border-color: rgb(30, 128, 255);
  width: 28px;
  height: 28px;
}
.btn-container {
  padding-left: 12px;
  padding-right: 16px;
}
.nav_list li {
  font-size: 14px;
  height: 100%;
  width: 52px;
}
.nav_list li a {
  margin: 0 10px;
  display: inline-block;
  line-height: 60px;
}
.nav_list .advertise {
  display: inline-block;
  width: 120px;
  height: 22px;
}
.nav_user li a {
  line-height: 38px;
}
#vip {
  margin: 0 0;
}
.head-picture{
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  position: relative;
}
a{
  color: black;
}
.active{
  color: rgb(17,113,238);
}

</style>
