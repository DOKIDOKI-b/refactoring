class Order {
  private _quantity;
  private _itemPrice;
  constructor(quantity: number, itemPrice: number) {
    this._quantity = quantity;
    this._itemPrice = itemPrice;
  }
  get finalPrice() {
    const basePrice = this._quantity * this._itemPrice;
    let discountLevel: number;
    if (this._quantity > 100) discountLevel = 2;
    else discountLevel = 1;
    return this.discountedPrice(basePrice, discountLevel);
  }

  discountedPrice(basePrice: number, discountLevel: number) {
    switch (discountLevel) {
      case 1:
        return basePrice * 0.95;
      case 2:
        return basePrice * 0.9;
      default:
        return basePrice;
    }
  }
}

const order = new Order(101, 1000);
console.log(order.finalPrice);

export {};
