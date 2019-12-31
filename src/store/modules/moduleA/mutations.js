export default {
  //方法
  nameRepeat(state) {
    state.name += 'cxk';
  },
  setAge(state,val) {
    state.age = val;
  },
  setAttr(state, params) {
    console.log('params is a obj', arguments);
    state[params.key] = params.value;
  }
}
