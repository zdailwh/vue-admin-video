<template>
  <div id="uploader">
    <div id="picker" class="el-upload el-upload--text">
      <div class="el-upload-dragger">
        <i class="el-icon-upload" />
        <div class="el-upload__text"><em>点击上传</em></div>
      </div>
      <input type="file" name="file" multiple="multiple" class="el-upload__input">
    </div>
    <!--用来存放文件信息-->
    <div id="thelist" class="uploader-list" />
  </div>
</template>
<script>
import $ from 'jquery'
import WebUploader from 'webuploader'
export default {
  data() {
    return {
    }
  },
  mounted() {
    var uploader = WebUploader.create({
      // swf: BASE_URL + '/js/Uploader.swf', // swf文件路径
      server: '/api/veu/blockchain/v1/videouploads', // 文件接收服务端。
      pick: '#picker', // 选择文件的按钮。可选。
      resize: false, // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
      // auto: true, // [默认值：false] 设置为 true 后，不需要手动调用上传，有文件选择即开始上传。
      chunked: false, // [默认值：false] 是否要分片处理大文件上传。
      chunkSize: 5242880, // [默认值：5242880] 如果要分片，分多大一片？ 默认大小为5M.
      chunkRetry: 2, // [默认值：2] 如果某个分片由于网络问题出错，允许自动重传多少次？
      threads: 3, // [默认值：3] 上传并发数。允许同时最大上传进程数。
      formData: {}, // [默认值：{}] 文件上传请求的参数表，每次发送都会发送此对象中的参数。
      fileVal: 'file', // [默认值：'file'] 设置文件上传域的name。
      method: 'POST' // [默认值：'POST'] 文件上传方式，POST或者GET
    })
    // 当有文件被添加进队列的时候
    uploader.on('fileQueued', function(file) {
      $('#thelist').append('<div id="' + file.id + '" class="item">' +
        '<p style="line-height: 18px;"><span class="info" style="margin-right: 20px;">' + file.name + '</span><span class="state">等待上传...</span></p>' +
      '</div>')
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

    uploader.on('uploadSuccess', function(file) {
      $('#' + file.id).find('span.state').text('已上传')
    })

    uploader.on('uploadError', function(file) {
      $('#' + file.id).find('span.state').text('上传出错')
    })

    uploader.on('uploadComplete', function(file) {
      $('#' + file.id).find('.el-progress').fadeOut()
    })
  },
  methods: {
  }
}
</script>
<style scoped>
.uploader-list .item .info {
  float: left;
  margin: 0;
}
.uploader-list .item .state {
  float: left;
}
</style>
