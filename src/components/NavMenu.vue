<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
      >
        <el-menu-item index="1">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">出库入库</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document-copy"></i>
          <span slot="title">详细列表</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-s-custom"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
name: "NavMenu",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(index,indexPath) {
      if (index === "1") {
        if(this.$route.path !== '/opterList'){
          this.$router.push({name:"opterList"})
        }
      }
      if (index === "2") {
        if(this.$route.path !== '/listDetail'){
          this.$router.push({name:"listDetail"})
        }
      }
      if (index === "3") {
        if(this.$route.path !== '/userList'){
          this.$router.push({name:"userList"})
        }
      }

      console.log(index, indexPath);
    }
  }
}
</script>

<style scoped>


</style>
