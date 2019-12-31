export default {
  changeAge(context) {
    return new Promise((resolve,reject)=> {
      setTimeout(()=> {
        resolve();
      },3000);
    }).then(()=> {
      context.commit('setAge',22);
      console.log('异步操作完成');
    })
  }
}
