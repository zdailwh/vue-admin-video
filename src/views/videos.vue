<template>
  <el-row>
    <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18" style="margin: 0 auto;float: none;padding: 20px 0;">
      <el-row :gutter="10">
        <el-col :md="5" :lg="5" :xl="5">
          <div class="user-wrap">
            <div style="position:absolute;width:100%;height:261px;background-color:#fff;opacity:0.7;z-index:11" />
            <img class="avator-bg" src="@/assets/cat.jpeg">
            <div style="position:relative;z-index:12" class="info">
              <img style="border-radius:100%" class="avator" src="@/assets/cat.jpeg">
              <div class="name">
                <span style="color:#333;font-weight:800">昵称昵称</span>
              </div>
            </div>
          </div>
          <el-menu
            default-active="1"
            :collapse="false"
            class="el-menu-vertical-demo"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-menu" />
                <span>内容管理</span>
              </template>
              <el-menu-item index="1">视频管理</el-menu-item>
              <el-menu-item index="2">我收藏的</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col :xs="24" :sm="24" :md="19" :lg="19" :xl="19">
          <el-tabs v-model="activeName">
            <el-tab-pane label="全部" name="first" />
          </el-tabs>
          <div v-show="tableData.length === 0" style="width:100%;min-height:1200px">
            <div style="width:fit-content;margin:0 auto;text-align:center;margin-top:50px">
              <img style="display:block;width:210px;margin:0 auto" src="@/assets/noList.png">
              <div style="color:#e7e7e7;font-size:22px;margin-top:10px">亲，您还没有观看视频哟</div>
            </div>
          </div>
          <el-table
            v-show="tableData.length > 0"
            :data="tableData"
            style="width: 100%"
          >
            <el-table-column label="标题">
              <template slot-scope="scope">
                <span>{{ scope.row.title }}</span>
              </template>
            </el-table-column>
            <el-table-column label="分类" width="200">
              <template slot-scope="scope">
                <span>{{ scope.row.typestr }}</span>
              </template>
            </el-table-column>
            <el-table-column label="简介">
              <template slot-scope="scope">
                <span>{{ scope.row.description }}</span>
              </template>
            </el-table-column>
            <el-table-column label="状态">
              <template slot-scope="scope">
                <span>{{ scope.row.statusstr }}</span>
              </template>
            </el-table-column>
            <!-- <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="handleVideoDel(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column> -->
          </el-table>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { getVideouploadList } from '@/api/table'
export default {
  data() {
    return {
      activeName: 'first',
      tableData: []
    }
  },
  mounted() {
    this.getVideouploadList()
  },
  methods: {
    getVideouploadList(page = 0, per_page = 20) {
      var params = {
        page: page,
        per_page: per_page
      }
      getVideouploadList(params).then(response => {
        this.tableData = response.data.items || []
      }).catch(error => {
        console.log(error)
      })
    },
    handleVideoDel(index, row) {
      console.log(row)
      this.$confirm('您确定要删除视频吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        // this.$message({
        //   type: 'info',
        //   message: '已取消删除'
        // })
      })
    }
  }
}
</script>

<style scoped>
.user-wrap {
  position: relative;
  width: 100%;
  height: 261px;
  overflow: hidden;
  text-align: center;
  border-right: 1px solid #e6e6e6;
}
.user-wrap .avator-bg {
  display: block;
  position: absolute;
  top: 0;
  width: 244px;
  height: 261px;
  filter: blur(20px);
  z-index: 10;
}
.user-wrap .info .avator {
  margin: 40px auto 0;
  width: 90px;
  height: 90px;
}
.user-wrap .info .name {
  margin-top: 12px;
  color: #333;
}
</style>
