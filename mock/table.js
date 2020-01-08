import Mock from 'mockjs'

const content = {
  'id|+1': 1,
  'class': 'app\\blockchain\\admin\\Content',
  'class_name': '内容',
  'model_name': '内容',
  'create_time': '2019-11-22 21:55:23',
  'update_time': '2019-11-22 21:55:23',
  'status': 0,
  'statusstr': '初始的',
  'path': '/api/admin/blockchain/v1/contents/6',
  'gcid': 'C002',
  'guid': 'bbbc788736c8e424f1a3cc72b86d19a9069ecf6f5dcdf57cbc9d2b91d77c8b78012b7a485bd19b9df7f120839103a46ff75868e43b28c9e378332c6a9e5edf56fc',
  'content_id': '2b7a485bd19b9df7f120839103a46ff75868e43b28c9e378332c6a9e5edf56fc',
  'inherit_id': '',
  'inherit_method': '',
  'inherit_platform': '',
  'action': '',
  'platform_id': '01',
  'title': '潜水-4k',
  'type': 0,
  'director': '',
  'actors': '明星',
  'keywords': '潜水-4k',
  'license_no': '',
  'genre': 0,
  'area': '',
  'duration': 0,
  'year': 0,
  'definition': '/data/video//潜水-4k.ts',
  'program_file': '',
  'post_file': '/data/video//潜水-4k.jpg',
  'log': '',
  'logfile': null
}
const video = {
  'id|+1': 1,
  'class': 'app\\blockchain\\admin\\ContentVideo',
  'class_name': '内容凭证',
  'model_name': '内容视频',
  'create_time': '2019-11-24 23:20:07',
  'update_time': '2019-11-24 23:20:07',
  'status': 1,
  'statusstr': '已提交',
  'path': '/api/admin/blockchain/v1/videos/3',
  'owner': content,
  'gcid': 'C001_Transcode',
  'guid': 'bbbc788736c8e424f1a3cc72b86d19a9069ecf6f5dcdf57cbc9d2b91d77c8b7801c99550832444100fb50838d8cd4447540eae8f90aa3122f10c6d219ad8b0e502',
  'content_id': '97be995520d8064f70d821d64a1bde8ba1e4db2808878d92229fa72a235eb41c',
  'inherit_id': 'c99550832444100fb50838d8cd4447540eae8f90aa3122f10c6d219ad8b0e502',
  'inherit_method': 'Original',
  'inherit_platform': '01',
  'action': 'Broadcast',
  'platform_id': '01',
  'title': 'DOXTV宣传片',
  'type': '02',
  'typestr': '电影',
  'director': '王一',
  'actors': '明星',
  'keywords': 'DOXTV, 宣传片',
  'license_no': '',
  'genre': 0,
  'area': '',
  'duration': 10,
  'year': 2015,
  'definition': 'HD',
  'play_url': '/video/public/C001_HD.mp4',
  'post_url': '/video/public/DOX4K宣传片.jpg',
  'watch_times': 0,
  'watch_duration': 0,
  'transmit_num': 0,
  'agree_num': 0,
  'comment_num': 0,
  'tx_url': 'https://www.baidu.com',
  'log': '',
  'logfile': null
}
const videos = Mock.mock({
  'items|30': [video]
})

export default [
  {
    url: '/videos/[0-9]',
    type: 'get',
    response: config => {
      const item = video
      return item
    }
  },
  {
    url: '/videos',
    type: 'get',
    response: config => {
      const { page = 0, per_page = 20 } = config.query
      const items = videos.items

      var mockList = items
      const pageList = mockList.filter((item, index) => index < per_page * (page + 1) && index >= per_page * page)

      return {
        'total': mockList.length,
        'page': page,
        'per_page': per_page,
        'count': pageList.length,
        'where': {
        },
        'path': '/api/admin/ffmpeg/v1/inputs',
        'items': pageList
      }
    }
  },
  {
    url: '/videos/[0-9]/play',
    type: 'post',
    response: config => {
      const item = video
      return item
    }
  },
  {
    url: '/videos/[0-9]/addtime',
    type: 'post',
    response: config => {
      const item = video
      return item
    }
  },
  {
    url: '/videos/[0-9]/agree',
    type: 'post',
    response: config => {
      const item = video
      return item
    }
  },
  {
    url: '/videos/[0-9]/comment',
    type: 'post',
    response: config => {
      const item = video
      return item
    }
  },
  {
    url: '/videouploads',
    type: 'get',
    response: config => {
      const { page = 0, per_page = 20 } = config.query
      const items = videos.items

      var mockList = items
      const pageList = mockList.filter((item, index) => index < per_page * (page + 1) && index >= per_page * page)

      return {
        'total': mockList.length,
        'page': page,
        'per_page': per_page,
        'count': pageList.length,
        'where': {
        },
        'path': '/api/admin/ffmpeg/v1/inputs',
        'items': pageList
      }
    }
  },
  {
    url: '/videouploads',
    type: 'post',
    response: config => {
      const item = video
      return item
    }
  },
  {
    url: '/videouploads/[0-9]',
    type: 'put',
    response: config => {
      const item = video
      return item
    }
  }
]
