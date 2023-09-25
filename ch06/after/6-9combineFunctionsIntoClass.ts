class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() {
    return this._customer;
  }
  get quantity() {
    return this._quantity;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }
  get baseCharge() {
    return baseRate(this.month, this._year) * this._quantity;
  }

  get texableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this._year));
  }
}

const baseRate = (month, year) => year - 2000 + month;

const taxThreshold = (year) => (year - 2000) * 0.1;

const acquireReading = () => ({
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
});

const client1 = () => {
  const rawReading = acquireReading();
  const aReading = new Reading(rawReading);
  const baseCharge = aReading.baseCharge;
  return baseCharge;
};

const client2 = () => {
  const rawReading = acquireReading();
  const aReading = new Reading(rawReading);
  return aReading.texableCharge;
};

const client3 = () => {
  const rawReading = acquireReading();
  const aReading = new Reading(rawReading);
  return aReading.baseCharge;
};

console.log(client1());
console.log(client2());
console.log(client3());
