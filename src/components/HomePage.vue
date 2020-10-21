<template>

</template>

<script>

import NavMenu from "./NavMenu";
import Header from "./Header";
import LoginIndex from "./LoginIndex";

export default {
  name: "HomePage",
  components: {
    'navmenu':NavMenu,
    'vheader':Header,
    'loginIndex':LoginIndex
  },
}
</script>

<style >
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
