<template>
  <div id="dplayer" />
</template>
<script>
import 'dplayer/dist/DPlayer.min.css'
import DPlayer from 'dplayer'

export default {
  mounted() {
    const dp = new DPlayer({
      container: document.getElementById('dplayer'),
      video: {
        url: '../videos/play/10000017_720P.mp4',
        quality: [
          {
            name: '720P',
            url: '../videos/play/10000017_720P.mp4',
            type: 'normal'
          },
          {
            name: 'BD',
            url: '../videos/play/10000017_BD.mp4',
            type: 'normal'
          },
          {
            name: 'HD',
            url: '../videos/play/10000017_HD.mp4',
            type: 'normal'
          }
        ],
        defaultQuality: 0
      }
    })
    console.log(dp)
  }
}
</script>
<style scoped>
#dplayer {
  width: 100%;
  height: auto;
}
</style>
