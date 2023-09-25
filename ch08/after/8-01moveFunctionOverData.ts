interface TypeProps {
  isPremium: boolean;
  overdraftCharge: (account: Account) => number;
}

class Account {
  _daysOverdrawn: number;
  type: TypeProps;

  constructor(daysOverdrawn: number, type: TypeProps) {
    // this.moneyAmount
    // this.createAt
    // this.number
    this._daysOverdrawn = daysOverdrawn;
    this.type = type;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  abstract overdraftCharge() {
    console.log('부모', this);
    console.log(this.type);
    return this.type.overdraftCharge(this);
  }
}

class AccountType extends Account {
  isPremium: boolean;

  constructor(isPremium: boolean) {
    this.isPremium = isPremium;
  }

  overdraftCharge(account: Account) {
    console.log('current account', account);
    console.log('여기는 RichGuy의 this', this);
    if (this.isPremium) {
      const baseCharge = 10;
      if (account._daysOverdrawn <= 7) return baseCharge;
      return baseCharge + (account._daysOverdrawn - 7) * 0.85;
    }
    return account._daysOverdrawn * 1.75;
  }
}

const type = new RichGuy(true);
const account = new Account(10, type);

console.log(account.overdraftCharge);
