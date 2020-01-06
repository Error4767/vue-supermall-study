export default class Goods{
  constructor(res) {
    let result = res.result;
    let itemInfo = result.itemInfo;
    this.columns = result.columns;
    this.services = result.shopInfo.services;
    this.title = itemInfo.title;
    this.images = itemInfo.topImages;
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountBgColor = itemInfo.discountBgColor;
  }
}
