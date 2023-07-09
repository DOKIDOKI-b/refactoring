//6-3-1
const price = (order) => {
  // 가격 = 제품 가격 - 수량 할인 + 배송비
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
};

const orderA = {
  itemPrice: 10000,
  quantity: 3,
};

const orderB = {
  itemPrice: 50000,
  quantity: 5,
};

console.log(price(orderA));
console.log(price(orderB));

// 6-3-2
class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }
  get quantity() {
    return this._data.quantity;
  }
  get itemPrice() {
    return this._data.itemPrice;
  }
  get price() {
    return (
      this.quantity * this.itemPrice -
      Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
      Math.min(this.quantity * this.itemPrice * 0.1, 100)
    );
  }
}

const classOrderA = new Order({
  itemPrice: 10000,
  quantity: 3,
});
const classOrderB = new Order({
  itemPrice: 50000,
  quantity: 5,
});

console.log(classOrderA.price);
console.log(classOrderB.price);
