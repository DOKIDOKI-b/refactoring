import Producer from './producer';

interface ProvinceProps {
  name: string;
  demand: number;
  price: number;
  producers: Producer[];
}

export default class Province {
  private _name;
  private _producers;
  private _totalProduction;
  private _demand;
  private _price;

  constructor(doc: ProvinceProps) {
    this._name = doc.name;
    this._producers = doc.producers || [];
    this._totalProduction = 0;
    this._demand = doc.demand;
    this._price = doc.price;
    doc.producers.forEach((d) => this.addProducer(new Producer(this, d)));
  }

  addProducer(arg: Producer) {
    this._producers.push(arg);
    this._totalProduction += arg.production;
  }

  get name() {
    return this._name;
  }

  get producers() {
    return this._producers;
  }

  get totalProduction() {
    return this._totalProduction;
  }

  set totalProduction(arg) {
    this._totalProduction = arg;
  }

  get demand() {
    return this._demand;
  }
  set demand(arg: number) {
    this._demand = arg;
  }

  get price() {
    return this._price;
  }
  set price(arg) {
    this._price = arg;
  }

  get shortfall() {
    return this._demand - this.totalProduction;
  }

  get profit() {
    return this.demandValue - this.demandCost;
  }

  get demandValue() {
    return this.satisfiedDemand * this.price;
  }

  get satisfiedDemand() {
    return Math.min(this._demand, this.totalProduction);
  }

  get demandCost() {
    let remainingDemand = this.demand;
    let result = 0;
    this.producers
      .sort((a, b) => a.cost - b.cost)
      .forEach((p) => {
        const contribution = Math.min(remainingDemand, p.production);
        remainingDemand -= contribution;
        result += contribution * p.cost;
      });
    return result;
  }
}
