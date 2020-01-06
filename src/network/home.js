import {request} from './request.js';
import {getDataInterceptor} from './responseInterceptors.js';
request.interceptors.response.use(getDataInterceptor);
export function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  });
}
export function getHomeGoods(type, page) {
  return request({
    url:'/home/data',
    params: {
      type,
      page
    }
  })
}
