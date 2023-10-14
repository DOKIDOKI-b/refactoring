interface Product {
  name: string;
  amount: number;
}

class ProductionPlan {
  private _production = 0;
  private _adjustments: Product[] = [];

  get production() {
    return this._production;
  }

  applyAdjustment(anAdjustment: Product) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}

const products = new ProductionPlan();
products.applyAdjustment({ name: '게보린', amount: 3000 });
products.applyAdjustment({ name: '브로콜리', amount: 2 });
products.applyAdjustment({ name: '딸기', amount: 5000 });

console.log(products.production);

/**
 * @page : 341
 * 소스가 둘 이상일때
 */

class ProductionPlan2 {
  private _production = 0;
  private _adjustments: Product[] = [];

  constructor(production: number) {
    this._production = production; // 생산량
  }
  get production() {
    return this._production;
  }
  applyAdjustment(anAdjustment: Product) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}

const products2 = new ProductionPlan2(0);
products2.applyAdjustment({ name: '게보린', amount: 3000 });
products2.applyAdjustment({ name: '브로콜리', amount: 2 });
products2.applyAdjustment({ name: '딸기', amount: 5000 });

console.log(products2.production);

export {};
