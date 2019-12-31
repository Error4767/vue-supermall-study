export default {
  //计算属性
  ageDay(state) {
    let age = state.age;
    return (age * 365 + age/5) + '+';
  },
  getAgeDay(state,getters) {
    return (age = state.age)=> {
      console.log('getters return a method', arguments);
      return (age * 365 + age/5) + '+';
    }
  }
}
