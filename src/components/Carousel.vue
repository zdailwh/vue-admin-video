<template>
  <div class="block">
    <el-carousel :interval="5000" :autoplay="false" class="carouselCont">
      <el-carousel-item v-for="(item,k) in list" :key="k">
        <img :src="item.url">
      </el-carousel-item>
      <img src="@/assets/cBG.png" class="cover">
    </el-carousel>
  </div>
</template>

<script>
// import c1 from '@/assets/c1.jpg'
// import c2 from '@/assets/c2.jpg'
// import c3 from '@/assets/c3.jpg'
import c4 from '@/assets/c4.jpg'
import c5 from '@/assets/c5.jpg'
import c6 from '@/assets/c6.jpg'
// import c7 from '@/assets/c7.jpg'
// import c8 from '@/assets/c8.jpg'
// import c9 from '@/assets/c9.jpg'
// import c10 from '@/assets/c10.jpg'
export default {
  data() {
    return {
      list: [
        // {
        //   url: c1,
        //   link: ''
        // },
        // {
        //   url: c2,
        //   link: ''
        // },
        // {
        //   url: c3,
        //   link: ''
        // },
        {
          url: c4,
          link: ''
        },
        {
          url: c5,
          link: ''
        },
        {
          url: c6,
          link: ''
        }
        // {
        //   url: c7,
        //   link: ''
        // },
        // {
        //   url: c8,
        //   link: ''
        // },
        // {
        //   url: c9,
        //   link: ''
        // },
        // {
        //   url: c10,
        //   link: ''
        // }
      ]
    }
  }
}
</script>

<style scoped>
.carouselCont {
  position: relative;
}
.cover {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>
