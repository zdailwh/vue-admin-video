<template>
  <div>
    <el-alert v-show="!uploaded" title="严禁上传违规违法/色情色诱/低俗/广告等视频内容，违者下架视频并封号处理!" type="warning" center />
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18" style="margin: 0 auto;float: none;">
        <div class="uploadFormCont">
          <el-form v-if="!uploaded" ref="form" :model="form" :rules="rules" label-width="80px">
            <el-form-item label="上传视频">
              <div id="uploader">
                <div id="picker" class="el-upload el-upload--text">
                  <div class="el-upload-dragger">
                    <i class="el-icon-upload" />
                    <div class="el-upload__text"><em>选取视频文件</em></div>
                  </div>
                </div>
                <!--用来存放文件信息-->
                <div id="thelist" class="uploader-list" />
              </div>
            </el-form-item>
            <el-form-item label="视频标题" prop="title">
              <el-input v-model="form.title" placeholder="为你的视频取个标题吧" />
            </el-form-item>
            <el-form-item label="视频分类" prop="type">
              <el-select v-model="form.type" placeholder="请选择视频分类">
                <el-option v-for="(val,k) in TYPES_ARR" :key="k" :label="val" :value="k" />
              </el-select>
            </el-form-item>
            <el-form-item label="视频简介" prop="description">
              <el-input v-model="form.description" type="textarea" placeholder="讲讲这个视频的故事，让更多人了解" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit('form')">保存发布</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div v-if="uploaded" class="uploadedCont">
          <h3 class="tips">您的视频已上传成功，当前正在转码审核中，请耐心等候</h3>
          <el-steps :active="2" align-center style="margin: 40px 0;">
            <el-step title="上传" description="" />
            <el-step title="转码" description="预计完成时间5分钟" />
            <el-step title="审核" description="转码成功后开始审核" />
            <el-step title="完成" description="" />
          </el-steps>
          <p style="text-align: center;">
            <router-link to="videos"><el-button type="primary">视频管理</el-button></router-link>
            <el-button type="primary" @click="uploaded = false">继续上传</el-button>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import $ from 'jquery'
import WebUploader from 'webuploader'
import { videoUpload } from '@/api/table'

// const TYPE_SERIES = '01'
// const TYPE_MOVIE = '02'
// const TYPE_ENT = '03'
// const TYPE_ANIME = '04'
// const TYPE_MUSIC = '05'
// const TYPE_EDU = '06'
// const TYPE_DOC = '07'
// const TYPE_NEWS = '08'
// const TYPE_SPORT = '09'
// const TYPE_TRAVEL = '10'
// const TYPE_SHORT = '11'

const TYPES_ARR = {
  '01': '电视剧',
  '02': '电影',
  '03': '综艺',
  '04': '动漫',
  '05': '音乐',
  '06': '教育',
  '07': '纪录片',
  '08': '资讯',
  '09': '体育',
  '10': '旅游',
  '11': '短视频'
}
export default {
  data() {
    return {
      loading1: false,
      loading: false,
      uploaded: false,
      file: {},
      form: {
        id: '',
        title: '',
        type: '',
        description: ''
      },
      TYPES_ARR: TYPES_ARR,
      rules: {
        title: [
          { required: true, message: '请输入视频标题', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择视频分类', trigger: 'change' }
        ],
        description: [
          { required: true, message: '请输入视频简介', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    var _this = this
    var uploader = WebUploader.create({
      // swf: BASE_URL + '/js/Uploader.swf', // swf文件路径
      server: '/api/veu/blockchain/v1/videouploads', // 文件接收服务端。
      pick: '#picker', // 选择文件的按钮。可选。
      resize: false, // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
      auto: true, // [默认值：false] 设置为 true 后，不需要手动调用上传，有文件选择即开始上传。
      chunked: false, // [默认值：false] 是否要分片处理大文件上传。
      chunkSize: 5242880, // [默认值：5242880] 如果要分片，分多大一片？ 默认大小为5M.
      chunkRetry: 2, // [默认值：2] 如果某个分片由于网络问题出错，允许自动重传多少次？
      threads: 3, // [默认值：3] 上传并发数。允许同时最大上传进程数。
      formData: {}, // [默认值：{}] 文件上传请求的参数表，每次发送都会发送此对象中的参数。
      fileVal: 'file', // [默认值：'file'] 设置文件上传域的name。
      method: 'POST', // [默认值：'POST'] 文件上传方式，POST或者GET
      fileNumLimit: 1 //  {int} [可选] [默认值：undefined] 验证文件总数量, 超出则不允许加入队列
      // fileSizeLimit: , // {int} [可选] [默认值：undefined] 验证文件总大小是否超出限制, 超出则不允许加入队列
    })
    window.uploader = uploader
    // 当有文件被添加进队列的时候
    uploader.on('fileQueued', function(file) {
      $('#thelist').append('<div id="' + file.id + '" class="item">' +
        '<p style="line-height: 18px;"><span class="info" style="margin-right: 20px;">' + file.name + '</span><span class="state">等待上传...</span></p>' +
      '</div>')
    })
    // 当文件被加入队列之前触发，此事件的handler返回值为false，则此文件不会被添加进入队列
    uploader.on('beforeFileQueued', function(file) {
      const isLt100M = file.size / 1024 / 1024 < 100

      if (!isLt100M) {
        _this.$message.error('上传视频文件大小不能超过 100MB!')
      }
      return isLt100M
    })
    // 文件上传过程中创建进度条实时显示。
    uploader.on('uploadProgress', function(file, percentage) {
      var $li = $('#' + file.id)
      var $percent = $li.find('.el-progress .el-progress-bar__inner')
      var $text = $li.find('.el-progress .el-progress__text')

      // 避免重复创建
      // if (!$percent.length) {
      //   $percent = $('<div class="progress progress-striped active">' +
      //     '<div class="progress-bar" role="progressbar" style="width: 0%">' +
      //     '</div>' +
      //   '</div>').appendTo($li).find('.progress-bar')
      // }
      if (!$percent.length) {
        $percent = $('<div class="el-progress el-progress--line">' +
          '<div class="el-progress-bar">' +
            '<div class="el-progress-bar__outer" style="height: 6px;">' +
              '<div class="el-progress-bar__inner" style="width: 0%;"></div>' +
            '</div>' +
          '</div>' +
          '<div class="el-progress__text" style="font-size: 14.4px;">0%</div>' +
        '</div>').appendTo($li).find('.el-progress-bar__inner')
      }

      $li.find('span.state').text('上传中')
      $percent.css('width', percentage * 100 + '%')
      $text.text(percentage * 100 + '%')
    })

    uploader.on('fileQueued', function(file) {
      _this.file = file
    })
    uploader.on('uploadSuccess', function(file, response) {
      $('#' + file.id).find('span.state').text('已上传')
      _this.completeUpload('success', response)
    })

    uploader.on('uploadError', function(file) {
      $('#' + file.id).find('span.state').text('上传出错')
      _this.completeUpload('error')
    })

    uploader.on('uploadComplete', function(file) {
      $('#' + file.id).find('.el-progress').fadeOut()
    })
  },
  methods: {
    onSubmit(formName) {
      if (this.loading) {
        this.$message({
          type: 'error',
          message: '等待视频文件上传完成!'
        })
        return
      }
      if (this.form.id === '') {
        this.$message({
          type: 'error',
          message: '还没有上传视频或视频上传失败!'
        })
        return
      }
      if (this.loading1) return
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading1 = true
          videoUpload(this.form).then(response => {
            this.loading1 = false
          }).catch(error => {
            this.loading1 = false
            console.log(error)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    completeUpload(tag, response = {}) {
      console.log(response)
      this.loading = false
      if (tag === 'success') {
        this.$message({
          type: 'success',
          message: '上传成功!'
        })
        this.form.id = response.id || response.data.id || ''
      } else if (tag === 'error') {
        this.$message({
          type: 'error',
          message: '上传出错!'
        })
      }
    }
  }
}
</script>

<style scoped>
.uploadFormCont {
  max-width: 600px;
  margin: 20px auto;
}
.uploadedCont .tips {
  font-size: 20px;
  color: #333;
  font-weight: normal;
}
</style>
