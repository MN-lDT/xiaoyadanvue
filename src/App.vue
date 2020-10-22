<template>

<div v-if="this.$route.path === '/'">
  <router-view></router-view>
</div>
  <div v-else>
    <el-container >
      <el-header class="header">
        <vheader />
      </el-header>
      <el-container>
        <el-aside width="200px" class="nav" >
          <navmenu />
        </el-aside>
        <el-container  >
          <el-main class="content-el">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>


</template>

<script>
import NavMenu from "./components/NavMenu";
import Header from "./components/Header";
import LoginIndex from "./components/LoginIndex";
export default {
  name: 'App',
  components: {
    'navmenu':NavMenu,
    'vheader':Header,
    'loginIndex':LoginIndex
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  margin-top: 60px;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.content-el {
  background-image: url("../static/image/bgimg.jpg");
}

.header {
  background-color: #fff;
  color: #409EFF;
  line-height: 60px;
}

.nav {
  background-color: #545c64;
  border-style: none;
}



.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
