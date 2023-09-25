interface CustomerConstructorArgs {
  name: string;
  discountRate: number;
}

class Customer {
  _name;
  _discountRate;
  _contract;

  constructor(name:string, discountRate: number)  {
    this._name = name;
    this._discountRate = discountRate;
    this._contract = new CustomerContract(new Date());
  }
  get discountRate() {
    return this._discountRate;
  }
  becomePreferred() {
    this._discountRate += 0.03;
    // other Things
  }

  applyDiscount(amount: any) {
    return amount.subtract(amount.multiply(this._discountRate));
  }
}

class CustomerContract {
  _startDate;
  constructor(startDate: Date | string) {
    this._startDate = startDate;
  }
}

const customer = new Customer('현영', 0.5);
customer.becomePreferred();
console.log(customer.discountRate);
