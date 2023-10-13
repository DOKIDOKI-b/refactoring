import Province from './Province';

interface ProducerData {
  cost: number;
  name: string;
  production: number;
}

export default class Producer {
  private _province;
  private _cost;
  private _name;
  private _production;

  constructor(aProvince: Province, data: ProducerData) {
    this._province = aProvince;
    this._cost = data.cost;
    this._name = data.name;
    this._production = data.production || 0;
  }

  get name() {
    return this._name;
  }

  get cost() {
    return this._cost;
  }
  set cost(arg) {
    this._cost = arg;
  }

  get production(): number {
    return this._production;
  }

  set production(amountStr: string | number) {
    //계산 결과를 _province에 갱신하는 코드
    let newProduction: number;
    if (typeof amountStr === 'string') {
      const amount = parseInt(amountStr, 10);
      newProduction = isNaN(amount) ? 0 : amount;
    } else {
      newProduction = amountStr;
    }

    this._province.totalProduction += newProduction - this._production;
    this._production = newProduction;
  }
}
