// p285 : 다른 클래스로 옮기기
export class Account {
  _daysOverdrawn;
  type;

  constructor(daysOverdrawn: number, type: TypeProps) {
    this._daysOverdrawn = daysOverdrawn;
    this.type = type;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) return (result += this.overdraftCharge);
    return result;
  }

  get overdraftCharge() {
    if (this.type.isPremium) {
      const baseCharge = 10;
      if (this._daysOverdrawn <= 7) return baseCharge;
      return baseCharge + (this._daysOverdrawn - 7) * 0.85;
    }
    return this._daysOverdrawn * 1.75;
  }
}
