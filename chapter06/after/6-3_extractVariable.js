const price = (order) => {
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);
  // 가격 = 제품 가격 - 수량 할인 + 배송비

  return basePrice - quantityDiscount + shipping;
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

  get basePrice() {
    return this.quantity * this.itemPrice;
  }

  get shipping() {
    return Math.min(this.quantity * this.itemPrice * 0.1, 100);
  }

  get quantityDiscount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }

  get price() {
    return this.basePrice - this.quantityDiscount + this.shipping;
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
