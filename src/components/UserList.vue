<template>
<div >
  <div style="width: 1000px;margin: 0 auto;background-color: white;padding-top: 20px;padding-bottom: 20px;height: 300px">
    <div style="width: 40%;height: 100%;margin-left: 30px">
      <div style="width: 100%;height: 50px;text-align: center;font-size: 20px;font-weight: bold;line-height: 70px;color: #606266">
         注册账户
      </div>
      <div style="height: 400px;margin-top: 80px">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="margin-top: -60px">
          <el-form-item label="姓名" prop="name">
            <el-input v-model.number="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
  <div style="width: 1000px;margin: 0 auto;background-color: white;margin-top:20px;padding-top: 20px;padding-bottom: 20px;height: 500px;line-height: 40px">
    <template>
      <el-table
        :data="tableData"
        border
        style="width: 90%;margin-left: 30px">
        <el-table-column
          prop="date"
          label="日期"
          width="180px">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180px">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          width="180px">
        </el-table-column>
        <el-table-column
          label="操作"
          >
          <template slot-scope="scope">
            <el-button :plain="true" @click="open2">初始化密码</el-button>
            <el-button :plain="true" @click="open1">删除</el-button>
<!--            <el-button @click="handleClick(scope.row)" type="text" size="small">初始化密码</el-button>-->
<!--            <el-button type="text" size="small">删除</el-button>-->
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</div>
</template>

<script>
export default {
  name: "UserList",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('姓名不能为空'));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }],
      ruleForm: {
        pass: '',
        checkPass: '',
        name: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        name: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    open2() {
      this.$message({
        message: '密码初始化成功！',
        type: 'success'
      });
    },
    open1 () {
      this.$message({
        message: '用户删除成功！',
        type: 'success'
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    handleClick(row) {
      console.log(row);
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
