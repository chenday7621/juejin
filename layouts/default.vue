<template>
  <div class="header">
        <a href="" class="logo"><img src="../static/ICON.png" alt="">稀土掘金</a>
        <nav class="header_nav">
            <ul class="nav_main">
                <ul class="nav_list" >
                    <li v-for="(item,index) in tab1_categories" :key="index" @click="go('/',index)">
                        <a :class="{active:isActive===index}">{{item}}</a>
                    </li>
                    <li><a href="" class="advertise"><img src="" alt=""></a></li>
                </ul>
                <ul class="nav_user">
                    <li>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="探索稀土掘金">
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="button">Go!</button>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="btn-group">
                            <button type="button" class="btn btn-info">创作者中心</button>
                            <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <span class="caret"></span>
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a href="#"><span class="glyphicon glyphicon-pencil"></span>写文章</a></li>
                                <li><a href="#"><span class="glyphicon glyphicon-dashboard"></span>发沸点</a></li>
                                <li><a href="#"><span class="glyphicon glyphicon-book"></span>写笔记</a></li>
                                <li><a href="#"><span class="glyphicon glyphicon-menu-down"></span>写代码</a></li>
                                <li><a href=""><span class="glyphicon glyphicon-download-alt"></span>草稿箱</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="">会员</a></li>
                    <li><a href="">消息</a></li>
                    <li><a href=""><img src="../static/ICON.png" alt=""></a></li>
                </ul>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  data(){
    return{
      tab1_categories:['首页','沸点','课程','直播','活动','竞赛','商城','APP','插件'],
      isActive:0
    }
  },
  methods:{
    go(path,index){
      this.isActive=index
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
        li {
            list-style-type: none;
        }

        a {
            text-decoration: none !important
        }

        [v-cloak] {
            display: none;
        }

        .header {
            display: flex;
            width: 1440px;
        }

        .logo {
            display: inline-block;
            height: 22px;
            line-height: 22px;
            font-size: 18px;
            width: auto;
            margin: 16px 0;
            margin-left: 20px;
        }

        .logo img {
            height: 22px;
            margin-right: 5px;
        }

        .nav_main,
        .nav_user,
        .nav_list {
            display: flex;
            padding-left: 20px;
        }

        .nav_list li {
            padding: 16px 8px 16px 8px;
            height: 22px;
        }
        .nav_list .advertise {
            display: inline-block;
            width: 120px;
            height: 22px;
        }
        /* .nav_user {
            float: right;
        } */
        .nav_user li {
            padding: 10px 15px;
        }
        .nav_user li a {
            line-height: 38px;
        }
        .dropdown-menu {
            min-width: 100px;
        }
        .dropdown-menu li {
            padding: 0;
        }
        .dropdown-menu li a {
            padding-bottom: 5px;
            padding-top: 5px;
        }
        .dropdown-menu li a span {
            margin-right: 8px;
        }
    </style>
