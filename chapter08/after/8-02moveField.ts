interface CustomerConstructorArgs {
  name: string;
  discountRate: number;
}

export class Customer {
  _name;
  _discountRate;
  _contract;

  constructor(name: string, discountRate: number) {
    this._name = name;
    this._contract = new CustomerContract(new Date(), discountRate);
    this._discountRate = this._setDiscountRate(discountRate);
  }
  get discountRate() {
    return this._discountRate;
  }
  becomePreferred() {
    this._contract._discountRate += 0.03;
    // other Things
  }

  _setDiscountRate(aNumber: number) {
    this._contract._discountRate = aNumber;
  }

  applyDiscount(amount: any) {
    return amount.subtract(amount.multiply(this._discountRate));
  }
}

export class CustomerContract {
  _startDate;
  _discountRate;

  constructor(startDate: Date | string, discountRate: number) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  get discountRate() {
    return this._discountRate;
  }
  set discountRate(aNumber) {
    this._discountRate = aNumber;
  }
}

const customer = new Customer('현영', 0.5);
customer.becomePreferred();
console.log(customer.discountRate);
