import request from '@/utils/request'

export function getSeriesList(params) {
  params.type = '01'
  return request({
    url: '/videos',
    method: 'get',
    params
  })
}
export function getMovieList(params) {
  params.type = '02'
  return request({
    url: '/videos',
    method: 'get',
    params
  })
}
export function getEntList(params) {
  params.type = '03'
  return request({
    url: '/videos',
    method: 'get',
    params
  })
}
export function getAnimeList(params) {
  params.type = '04'
  return request({
    url: '/videos',
    method: 'get',
    params
  })
}
export function getMusicList(params) {
  params.type = '05'
  return request({
    url: '/videos',
    method: 'get',
    params
  })
}
export function getEduList(params) {
  params.type = '06'
  return request({
    url: '/videos',
    method: 'get',
    params
  })
}
export function getDocList(params) {
  params.type = '07'
  return request({
    url: '/videos',
    method: 'get',
    params
  })
}
export function getNewsList(params) {
  params.type = '08'
  return request({
    url: '/videos',
    method: 'get',
    params
  })
}
export function getSportList(params) {
  params.type = '09'
  return request({
    url: '/videos',
    method: 'get',
    params
  })
}
export function getTravelList(params) {
  params.type = '10'
  return request({
    url: '/videos',
    method: 'get',
    params
  })
}
export function getShortList(params) {
  params.type = '11'
  return request({
    url: '/videos',
    method: 'get',
    params
  })
}
export function getVideo(params) {
  return request({
    url: '/videos/' + params.id,
    method: 'get'
  })
}
export function videoPlay(params) {
  return request({
    url: '/videos/' + params.id + '/play',
    method: 'post',
    params
  })
}
export function videoAddtime(params) {
  return request({
    url: '/videos/' + params.id + '/addtime',
    method: 'post',
    params
  })
}
export function videoAgree(params) {
  return request({
    url: '/videos/' + params.id + '/agree',
    method: 'post',
    params
  })
}
export function videoComment(params) {
  return request({
    url: '/videos/' + params.id + '/comment',
    method: 'post',
    params
  })
}
export function getVideouploadList(params) {
  return request({
    url: '/videouploads',
    method: 'get',
    params
  })
}
export function videoUpload_(params) {
  return request({
    url: '/videouploads',
    method: 'post',
    params
  })
}
export function videoUpload(params) {
  return request({
    url: '/videouploads/' + params.id,
    method: 'put',
    data: params
  })
}

