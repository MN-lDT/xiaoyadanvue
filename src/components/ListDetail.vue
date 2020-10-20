<template>
<div >
  <div style="width: 70%;margin: 0 auto;margin-top: 10px;line-height: 50px;background-color: white">
    <div style="width: 100%;margin: 0 auto;padding-top: 20px">
      <el-form label-width="80px">
        <div style="width: 100%;height: 50px;margin-top: 10px">
          <div style="width: 50%;height: 100%;float: left">
            <el-form-item label="操作时间" style="float: left;margin-top: 5px">
              <el-date-picker
                v-model="value1"
                type="datetimerange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['12:00:00']">
              </el-date-picker>
            </el-form-item>
          </div>
          <div style="width: 50%;height: 100%;float: left">
            <el-form-item label="操作人" style="float: left;margin-top: 5px">
              <el-select v-model="formInline.region" placeholder="操作人">
                <el-option label="管理员1" value="shanghai"></el-option>
                <el-option label="管理员2" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </div>
        <div style="width: 100%;height: 50px;margin-top: 10px">
          <div style="width: 50%;height: 100%;float: left">
            <el-form-item label="操作类型" style="float: left;margin-top: 5px">
              <el-select v-model="formInline.region" placeholder="操作类型">
                <el-option label="入库" value="shanghai"></el-option>
                <el-option label="出库" value="beijing"></el-option>
                <el-option label="出库加入库" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div style="width: 50%;height: 100%;float: left">
            <el-form-item label="备注" style="float: left;margin-top: 5px">
              <el-input
                placeholder="请输入内容"
                v-model="input"
                clearable>
              </el-input>
            </el-form-item>
          </div>
        </div>
        <div style="width: 100%;height: 50px;margin-top: 10px">
          <div style="width: 50%;height: 100%;float: left">
            <el-form-item style="float: left">
              <el-button type="primary"  icon="el-icon-search">查询</el-button>
            </el-form-item>
            <el-form-item style="float: left">
              <el-button type="primary"   icon="el-icon-download">导出</el-button>
            </el-form-item>
          </div>
        </div>
      </el-form>
    </div>
  </div>

  <div style="width: 70%;margin: 0 auto;margin-top: 30px;line-height: 50px;background-color: white">
    <div>
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName">
        <el-table-column
          prop="createDate"
          label="操作时间"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="username"
          label="操作人"
          width="180">
        </el-table-column>
        <el-table-column
          prop="type"
          label="操作类型">
        </el-table-column>
        <el-table-column
          prop="addCount"
          label="入库数量">
        </el-table-column>
        <el-table-column
          prop="cutQpCount"
          label="出库青皮数量">
        </el-table-column>
        <el-table-column
          prop="cutKdCount"
          label="出库烤蛋数量">
        </el-table-column>
        <el-table-column
          prop="remark"
          label="备注">
        </el-table-column>
      </el-table>
    </div>
    <div style="width: 98%;margin-left: 20px;margin-top: 20px">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ListDetail",
  methods: {
    handleClick(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    tableRowClassName({row, rowIndex}) {
      if (rowIndex %3 === 1) {
        return 'warning-row';
      } else if (rowIndex %3 === 0) {
        return 'success-row';
      }
      return '';
    }
  },
  data() {
    return {
      form:'',
      textarea:'',
      currentPage4: 4,
      input: '',
      value1: '',
      value2: '',
      formInline: {
        user: '',
        region: ''
      },
      tableData: [{
        createDate: '2016-05-02',
        username: '王小虎',
        type: '出库',
        addCount: 800,
        cutQpCount:300,
        cutKdCount:100,
        remark:"这是一次入库800蛋，出库400蛋的操作"
      }, {
        createDate: '2016-05-02',
        username: '王小虎',
        type: '出库',
        addCount: 800,
        cutQpCount:300,
        cutKdCount:100,
        remark:"这是一次入库800蛋，出库400蛋的操作"
      }, {
        createDate: '2016-05-02',
        username: '王小虎',
        type: '入库',
        addCount: 800,
        cutQpCount:300,
        cutKdCount:100,
        remark:"这是一次入库800蛋，出库400蛋的操作"
      }, {
        createDate: '2016-05-02',
        username: '王小虎',
        type: '出库',
        addCount: 800,
        cutQpCount:300,
        cutKdCount:100,
        remark:"这是一次入库800蛋，出库400蛋的操作"
      }, {
        createDate: '2016-05-02',
        username: '王小虎',
        type: '出库',
        addCount: 800,
        cutQpCount:300,
        cutKdCount:100,
        remark:"这是一次入库800蛋，出库400蛋的操作"
      }, {
        createDate: '2016-05-02',
        username: '王小虎',
        type: '入库加出库',
        addCount: 800,
        cutQpCount:300,
        cutKdCount:100,
        remark:"这是一次入库800蛋，出库400蛋的操作"
      }, {
        createDate: '2016-05-02',
        username: '王小虎',
        type: '出库',
        addCount: 800,
        cutQpCount:300,
        cutKdCount:100,
        remark:"这是一次入库800蛋，出库400蛋的操作"
      }, {
        createDate: '2016-05-02',
        username: '王小虎',
        type: '出库',
        addCount: 800,
        cutQpCount:300,
        cutKdCount:100,
        remark:"这是一次入库800蛋，出库400蛋的操作"
      }],
    }
  }
}
</script>

<style >


</style>
