<template>
  <el-row>
    <el-col :span="24">
      <div class="head-wrap" style="">
        <div style="width: 82%;float: left;height: 70px">
          <h2 style="margin-top: -6px">鸭蛋入库出库系统</h2>
        </div>
        <div style="float:left;width: 10%;margin-left: 120px">
          <div style="float:left;width: 32%;margin-top: 7px;margin-left: 10px">
            <img src="static/image/admin.jpg" style="width: 35px;height: auto">
          </div>
          <div style="float: left;width: 60%;margin-left:-10px">
            <el-menu  class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-submenu index="1">
              <template slot="title">管理员</template>
              <el-menu-item index="2-1">修改密码</el-menu-item>
              <el-menu-item index="2-2">退出登陆</el-menu-item>
            </el-submenu>
            </el-menu>
          </div>

        </div>
      </div>
    </el-col>
  </el-row>

</template>

<script>
export default {
name: "Header",
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.head-wrap {
    height: 70px;
  margin-top: 0px !important;
}

</style>
