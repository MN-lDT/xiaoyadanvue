<template>
<div style="width: 100%;height: 820px">
  <div style="width: 1000px;height:350px;margin: 0 auto;overflow: hidden">
    <div style="width: 48%;height:100%;float: left;background-color: white;padding-top: 30px">
      <div style="width: 90%;height: 100%;margin: 0 auto">
        <el-form :model="ruleForm" status-icon :rules="rules"  label-width="100px" class="demo-ruleForm" >
          <el-form-item label="入库数量" >
            <el-input  oninput="value=value.replace(/[^0-9.]/g,'')" v-model="ruleForm.rkCount" placeholder="请输入数字" ></el-input>
          </el-form-item>
          <el-form-item label="出库青皮" >
            <el-input  oninput="value=value.replace(/[^0-9.]/g,'')"  v-model="ruleForm.qpCount" placeholder="请输入数字"></el-input>
          </el-form-item>
          <el-form-item label="出库烤蛋" >
            <el-input  oninput="value=value.replace(/[^0-9.]/g,'')" v-model="ruleForm.kdCount" placeholder="请输入数字"></el-input>
          </el-form-item>
          <el-form-item label="备注" >
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="ruleForm.remark">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-check">提交</el-button>
            <el-button  icon="el-icon-close" @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div style="width: 50%;height:100%;float: right;background-color: white;padding-top: 30px">
      <div style="width: 100%;height: 70%;margin: 0 auto;margin-left:100px;line-height: 70px;margin-top: 20px">
        <el-row :gutter="12" >
          <el-col :span="8" >
            <el-card shadow="hover" style="background-color: #F2F6FC;color: #606266;width: 300px">
              当前库中数量：<br>
              <h2>50</h2>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>

  </div>


</div>


</template>

<script>

export default {
  name: "OpterList",
  methods: {

    resetForm:function () {
      this.ruleForm.kdCount='';
      this.ruleForm.rkCount='';
      this.ruleForm.qpCount='';
      this.ruleForm.remark = '';
    },
    onSubmit() {
      console.log('submit!');
    }
  },
  data() {
    return {

      ruleForm: {
        rkCount: '',
        qpCount: '',
        kdCount: '',
        remark:''
      },

      rules: {
        pass: [

        ],
        checkPass: [

        ],
        age: [

        ]
      }
    }
  }
}
</script>

<style >


  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }


</style>
