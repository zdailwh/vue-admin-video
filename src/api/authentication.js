import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/authentications',
    method: 'post',
    data,
    baseURL: process.env.NODE_ENV === 'production' ? '/api/vyq/v1' : '/dev-api/table'
  })
}

export function logout() {
  return request({
    url: '/authentications',
    method: 'delete',
    baseURL: process.env.NODE_ENV === 'production' ? '/api/vyq/v1' : '/dev-api/table'
  })
}

export function register(data) {
  return request({
    url: '/authentications/register',
    method: 'post',
    data,
    baseURL: process.env.NODE_ENV === 'production' ? '/api/vyq/v1' : '/dev-api/table'
  })
}
