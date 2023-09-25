/**
 * 간단한 계산식
 */

interface OrderInterface {
  itemPrice: number;
  quantity: number;
}

type OrderType = typeof order;

const price = (order: OrderType) => {
  // 가격 = 제품 가격 - 수량 할인 + 배송비
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
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
  get price() {
    return (
      this.quantity * this.itemPrice -
      Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
      Math.min(this.quantity * this.itemPrice * 0.1, 100)
    );
  }
}

const classOrder = new Order({
  itemPrice: 10000,
  quantity: 3,
});

console.log(classOrder.quantity);

export {};
