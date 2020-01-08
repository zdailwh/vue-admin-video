<template>
  <div class="vpaction-wrap">
    <div style="height: 30px;">
      <ul class="play-fn">
        <!-- <li class="fn-item">
          <span class="fn-title">
            <i class="el-icon-share" />
          </span>
          <span class="text">分享</span>
        </li>
        <li class="fn-item">
          <span class="fn-title">
            <i class="el-icon-download" />
          </span>
          <span class="text">下载</span>
        </li>
        <li class="fn-item">
          <span class="fn-title">
            <i class="el-icon-star-on" />
          </span>
          <span class="text">收藏</span>
        </li> -->
        <li class="fn-item" @click="$emit('agree', 12)">
          <span class="fn-title">
            <svg-icon icon-class="thumbsUp" />
          </span>
          <span class="text">点赞</span>
        </li>
        <li>
          <div class="yk-dmtxtbox">
            <input v-model="comment" class="yk-dmtxt" type="text" placeholder="">
            <button class="yk_dmadd_button" type="button" @click="$emit('comment', comment)">评 论</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comment: ''
    }
  }
}
</script>
<style scoped>
.vpaction-wrap {
  padding: 15px 17px;
  background-color: #1f1f1f;
}
.play-fn {
  list-style: none;
  margin: 0;
  padding: 0;
}
.play-fn:after {
  display: block;
  height: 0;
  visibility: hidden;
  content: '';
  clear: both;
}
.play-fn li {
  float: left;
  position: relative;
  margin-right: 20px;
  height: 40px;
  line-height: 30px;
  font-size: 12px;
  color: #fff;
}
.play-fn li:hover {
  cursor: pointer;
  color: #007ffe;
}
.yk-dmtxtbox {
  width: 590px;
  position: relative;
}
.yk-dmtxtbox .yk-dmtxt {
  background-color: #333;
  color: #fff;
  width: 90%;
  padding-left:15px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  height: 32px;
  border: 0;
}
.yk-dmtxtbox .yk-dmtxt:focus {
  outline: none;
}
.yk-dmtxtbox .yk_dmadd_button {
  background-color: #505056;
  color: #999;
  width: 60px;
  height: 32px;
  line-height: 32px;
  border: 0;
  cursor: pointer;
  font-size: 14px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  position: absolute;
  right: 0;
  top: 0;
}
.yk-dmtxtbox .yk_dmadd_button:focus {
  outline: none;
}
</style>
