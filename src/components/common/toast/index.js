import Toast from './toast';
const obj = {};
obj.install = (Vue)=> {
  const ToastConstructor = Vue.extend(Toast);
  const toast = new ToastConstructor();
  toast.$mount(document.createElement('div'));
  document.body.appendChild(toast.$el);
  Vue.prototype.$toast = toast;
}
export default obj;
