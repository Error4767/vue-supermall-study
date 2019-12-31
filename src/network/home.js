import {request} from './request.js';
import {getDataInterceptor} from './responseInterceptors.js';
request.interceptors.response.use(getDataInterceptor);
export function getHomeMultiData() {
  return request({
    url: 'http://123.207.32.32:8000/home/multidata'
  });
}
export function getHomeGoods(type, page) {
  return request({
    url:'http://106.54.54.237:8000/api/w1/home/data',
    params: {
      type,
      page
    }
  })
}
