/**
 * 간단한 계산식
 */
export interface OrderType {
  itemPrice: number;
  quantity: number;
}

const price = (order: OrderType) => {
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);
  // 가격 = 제품 가격 - 수량 할인 + 배송비

  return basePrice - quantityDiscount + shipping;
};

const order = {
  itemPrice: 10000,
  quantity: 3,
};

console.log(price(order));

/**
 * 클래스 안에서
 */
class Order {
  private _data;

  constructor(aRecord: OrderType) {
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

const classOrder = new Order({
  itemPrice: 10000,
  quantity: 3,
});

console.log(classOrder.price);
