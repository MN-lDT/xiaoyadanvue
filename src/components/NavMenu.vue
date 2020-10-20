<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect">
        <el-menu-item index="1">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">出库入库</span>

        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document-copy"></i>
          <span slot="title">详细列表</span>

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
        this.$router.push({name:"opterList"})
      }
      if (index === "2") {
        this.$router.push({name:"listDetail"})
      }

      console.log(index, indexPath);
    }
  }
}
</script>

<style scoped>

</style>
