export class Goods{
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
    this.realPrice = itemInfo.lowNowPrice;
  }
}
export class Shop {
  constructor(res) {
    let result = res.result;
    let shopInfo = result.shopInfo;
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}
