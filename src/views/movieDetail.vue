<template>
  <div>
    <el-row class="playerBg">
      <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18" style="margin: 0 auto;float: none;">
        <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
            <div class="playerCont">
              <div id="tcplayer" />
              <Vpaction @agree="videoAgree()" @comment="videoComment($event)" />
              <div class="playMsg">
                <h1 class="playTitle">{{ datavideo.title }}</h1>
                <p class="playDesc">{{ datavideo.year }}上映</p>
              </div>
            </div>
          </el-col>
          <el-col :lg="6" :xl="6" class="hidden-md-and-down">
            <div class="playerRight">
              <div class="playMsgR">
                <h2 class="playTitle">{{ datavideo.title }}</h2>
                <p class="playDesc">{{ datavideo.year }}上映</p>
                <p class="playDesc">{{ datavideo.keywords }}</p>
                <p class="playDesc" style="margin-bottom: 0;">节目内容ID：</p>
                <p class="playDesc" style="word-wrap: break-word;margin-top: 0;">{{ datavideo.content_id }}</p>
                <p v-if="datavideo.license_no !== ''" class="playDesc" style="margin-bottom: 0;">审号：{{ datavideo.license_no }}</p>
                <br><br>
                <p class="playDesc" style="margin-bottom: 0;text-align: center;color: #fff;">扫码跟踪节目信息</p>
                <p class="playDesc" style="text-align: center;">
                  <span id="qrcode" />
                </p>
              </div>
              <PlayPage v-if="datavideo.type === '01'" />
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18" style="margin: 0 auto;float: none;">
        <div class="cateCont">
          <router-link to="/index/movie" class="tabCate">你可能还喜欢这些节目</router-link>
          <div style="padding-top: 55px">
            <MovieList />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { TcPlayer } from 'tcplayer'
import QRCode from 'qrcodejs2'
import 'element-ui/lib/theme-chalk/display.css'
import Vpaction from '@/components/Vpaction'
import PlayPage from '@/components/PlayPage'
import MovieList from '@/components/MovieList'
import { getVideo, videoPlay, videoAddtime, videoAgree, videoComment } from '@/api/table'
export default {
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    if (window.player && window.player.currentTime()) {
      this.videoAddtime(window.player.currentTime())
    }
    next()
  },
  components: { Vpaction, PlayPage, MovieList },
  data() {
    return {
      videoid: this.$route.params.mid,
      datavideo: {},
      loading: false,
      widthPlayer: '',
      heightPlayer: ''
    }
  },
  mounted() {
    this.getVideo()
    var widthPlayer = document.querySelector('#tcplayer').offsetWidth
    this.widthPlayer = widthPlayer
    this.heightPlayer = widthPlayer * 9 / 16
    document.querySelector('#tcplayer').style.height = this.heightPlayer + 'px'
  },
  methods: {
    getVideo() {
      var params = {
        id: this.videoid
      }
      getVideo(params).then(response => {
        this.datavideo = response.data || {}
        if (this.datavideo.play_url) {
          this.createPlayer()
        }
        if (this.datavideo.tx_url) {
          this.qrcode()
        }
      }).catch(error => {
        console.log(error)
      })
    },
    createPlayer() {
      var this_ = this
      var url = this.datavideo.play_url
      // var url = 'https://1256993030.vod2.myqcloud.com/d520582dvodtransgzp1256993030/7732bd367447398157015849771/v.f40.mp4'

      var player = new TcPlayer('tcplayer', {
        mp4: url,
        // mp4_hd: url,
        // mp4_sd: url,
        clarity: 'hd',
        clarityLabel: {
          // bd: 'BD',
          hd: 'HD'
          // sd: 'SD'
        },
        width: this.widthPlayer || '640',
        height: this.heightPlayer || '360',
        wording: {
          1001: '网络错误，请检查网络配置或者播放链接是否正确',
          1002: '获取视频失败，请检查播放链接是否有效',
          2032: '获取视频失败，请检查播放链接是否有效',
          2048: '无法加载视频文件，跨域访问被拒绝'
        },
        listener: function(msg) {
          // console.log('listener',msg);
          if (msg.type === 'play') {
            this_.videoPlay()
          }
          if (msg.type === 'loadeddata') {
            player.play()
          }
        }
      })
      window.player = player
    },
    videoPlay() {
      if (this.loading) return
      var params = {
        id: this.videoid
      }
      this.loading = true
      videoPlay(params).then(response => {
        this.loading = false
      }).catch(error => {
        console.log(error)
        this.loading = false
      })
    },
    videoAddtime(duration) {
      if (this.loading) return
      var params = {
        id: this.videoid,
        duration: Math.round(duration)
      }
      this.loading = true
      videoAddtime(params).then(response => {
        this.loading = false
      }).catch(error => {
        console.log(error)
        this.loading = false
      })
    },
    videoAgree() {
      if (this.loading) return
      var params = {
        id: this.videoid
      }
      this.loading = true
      videoAgree(params).then(response => {
        this.loading = false
      }).catch(error => {
        console.log(error)
        this.loading = false
      })
    },
    videoComment(comment) {
      if (comment === '') {
        this.$message({
          type: 'error',
          message: '请输入评论内容!'
        })
        return
      }
      if (this.loading) return
      var params = {
        id: this.videoid,
        comment: comment
      }
      this.loading = true
      videoComment(params).then(response => {
        this.loading = false
      }).catch(error => {
        console.log(error)
        this.loading = false
      })
    },
    qrcode() {
      var _this = this
      const qrcode = new QRCode('qrcode', {
        width: 120,
        height: 120,
        text: _this.datavideo.tx_url,
        colorDark: '#000',
        colorLight: '#fff'
      })
      console.log(qrcode)
    }
  }
}
</script>
<style scoped>
.playerCont {
  padding: 20px 0;
}
.playerRight {
  padding: 20px 20px;
}
.playMsg {
  text-align: left;
}
.playMsg .playTitle {
  color: #fff;
  font-size: 24px;
  line-height: 28px;
}
.playMsg .playDesc {
  color: #999;
  font-size: 12px;
  line-height: 28px;
}
.playMsgR {
  text-align: left;
}
.playMsgR .playTitle {
  color: #fff;
  font-size: 22px;
  /*height: 20px;*/
  margin-bottom: 10px;
}
.playMsgR .playDesc {
  color: #999;
  font-size: 12px;
  /*height: 20px;*/
  line-height: 20px;
}

#qrcode {
  display: inline-block;
  text-align: center;
  padding: 6px;
  background-color: #fff;
}
</style>
