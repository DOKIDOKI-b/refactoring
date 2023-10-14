interface OrderProps {
  number: number;
  customer: string;
}

class Customer {
  private _id;
  constructor(id: string) {
    this._id = id;
  }
  get id() {
    return this._id;
  }
}

class Order {
  private _number;
  private _customer;

  constructor(data: OrderProps) {
    this._number = data.number;
    this._customer = new Customer(data.customer);
  }
  get customer() {
    return this._customer;
  }
}

const order = new Order({ number: 1, customer: 'a' });

console.log(order.customer.id);

export {};
