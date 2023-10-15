import assert from 'assert';

class Customer {
  private _discountRate: number | null = null;

  applyDiscount(number: number) {
    if (!this._discountRate) return number;
    assert(this._discountRate >= 0);
    return number - this._discountRate * number;
  }

  set discountRate(number: number) {
    assert(number === null || number >= 0);
    this._discountRate = number;
  }
}

export {};
