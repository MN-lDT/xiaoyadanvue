<template>
<div style="width: 100%">
  <div style="width: 70%;height:300px;margin: 0 auto;overflow: hidden">
    <div style="width: 48%;height:100%;float: left;background-color: white;padding-top: 30px">
      <div style="width: 60%;height: 100%;margin: 0 auto">
        <el-form :model="ruleForm" status-icon :rules="rules"  label-width="100px" class="demo-ruleForm" >
          <el-form-item label="入库数量" >
            <el-input  oninput="value=value.replace(/[^0-9.]/g,'')" v-model="ruleForm.rkCount" ></el-input>
          </el-form-item>
          <el-form-item label="出库青皮" >
            <el-input  oninput="value=value.replace(/[^0-9.]/g,'')"  v-model="ruleForm.qpCount" ></el-input>
          </el-form-item>
          <el-form-item label="出库烤蛋" >
            <el-input  oninput="value=value.replace(/[^0-9.]/g,'')" v-model="ruleForm.kdCount" ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button >提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div style="width: 50%;height:100%;float: right;background-color: white;padding-top: 30px">
      <div style="width: 100%;height: 70%;margin: 0 auto;margin-left: 200px;line-height: 70px">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="hover">
              当前库中数量：<br>
              <h2>50</h2>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>

  </div>

  <div style="width: 70%;margin: 0 auto;margin-top: 30px;line-height: 50px">
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="date"
        label="日期"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</div>


</template>

<script>
export default {
  name: "OpterList",
  methods: {
    handleClick(row) {
      console.log(row);
    },
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    resetForm:function () {
      this.ruleForm.kdCount='';
      this.ruleForm.rkCount='';
      this.ruleForm.qpCount='';
    }
  },
  data() {
    return {
      ruleForm: {
        rkCount: '',
        qpCount: '',
        kdCount: ''
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
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
