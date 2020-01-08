<template>
  <el-row>
    <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18" style="margin: 0 auto;float: none;">
      <div class="container">
        <el-row :gutter="10">
          <el-col :span="6">
            <dl>
              <dt>关于大优奇视频事业群</dt>
              <dd><a href="javascript:;">友情链接</a></dd>
              <dd><a href="javascript:;">广告服务</a></dd>
              <dd><a href="javascript:;">联系我们</a></dd>
            </dl>
          </el-col>
          <el-col :span="6">
            <dl>
              <dt>产品中心</dt>
              <dd><a href="javascript:;">PC客户端</a></dd>
              <dd><a href="javascript:;">手机客户端</a></dd>
              <dd><a href="javascript:;">视频云</a></dd>
            </dl>
          </el-col>
          <el-col :span="6">
            <dl>
              <dd><a href="javascript:;">网络文化经营许可证 京网文[2014]0934-236号</a></dd>
              <dd><a href="javascript:;">网络110报警服务</a></dd>
              <dd>药品服务许可证(京)-经营-2015-0029</dd>
              <dd><a href="javascript:;">节目制作经营许可证京字670号</a></dd>
              <dd>违法不良信息举报: 电话4008100580、</dd>
            </dl>
          </el-col>
          <el-col :span="6">
            <dl>
              <dd>请使用者仔细阅读优奇视频<a href="javascript:;">《用户协议》</a>、<a href="javascript:;">《隐私政策》</a>、</dd>
              <dd><a href="javascript:;">《知识产权声明》</a>、<a href="javascript:;">《反盗链声明》</a>、<a href="javascript:;">《账号注销协议》</a>和<a href="javascript:;">历史协议文本</a></dd>
              <dd><a href="javascript:;">信息网络传播视听节目许可证0108283号</a></dd>
              <dd><a href="javascript:;">家长监护工程</a></dd>
            </dl>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
}
</script>
<style scoped>
dl {
  font-size: 12px;
  color: #555;
}
dt {
  line-height: 24px;
  height: 24px;
  color: #999;
}
dd {
  line-height: 24px;
  margin-left: 0;
}
dd a:hover {
  color: #148aff;
}
</style>
