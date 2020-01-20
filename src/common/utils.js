import {formatDate} from './utils/formatDate.js';

export {
  formatDate
}

export function debounce(fn, delay = 50, self) {
  let timer = null;
  return function(...args) {
    if(timer) {clearTimeout(timer)}
    timer = setTimeout(()=> {
      self ? fn.apply(self, args) : fn.apply(window, args);
    }, delay);
  }
}
export function randomID(length = 10) {
  return Math.random().toString(36).substr(3, length);
}
export function throttle(fn, interval = 50, self) {
  let lastTime = null;
  return function(...args) {
    let currentTime = new Date();
    if(currentTime - lastTime > interval || !lastTime) {
      lastTime = currentTime;
      self ? fn.apply(self, args) : fn.apply(window, args);
    }
  }
}
