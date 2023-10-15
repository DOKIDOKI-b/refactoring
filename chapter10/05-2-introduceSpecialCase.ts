/**
 * @page : 395
 * 예시 : 객체 리터럴 이용하기
 */

type UnkownCustomer = '미확인 고객';

interface ResitseredCustomer {
  name: string;
  billingPlan: {
    basic?: string;
    vip?: string;
  };
  paymentHistory: { weeksDelinquentInLastYear: number };
}

type CustomerType = ResitseredCustomer | UnkownCustomer;

class Site {
  private _customer: CustomerType = '미확인 고객';

  get customer() {
    return this._customer;
  }
}

class Customer {
  private _name: ResitseredCustomer['name'] | null = null;
  private _billingPlan: ResitseredCustomer['billingPlan'] | null = null;
  private _paymentHistory: ResitseredCustomer['paymentHistory'] | null = null;

  get name() {
    return this._name;
  }
  get billingPlan() {
    return this._billingPlan;
  }
  set billingPlan(arg) {
    this._billingPlan = arg;
  }
  get paymentHistory() {
    return this._paymentHistory;
  }
}

const site = new Site();

const registry = {
  billingPlans: {
    basic: '처음 오신 고갱님이니 기본으로..',
    vip: '어서오십셔 !',
  },
};

const client1 = () => {
  const customer = site.customer;
  //... 수많은 코드
  let customerName;
  if (customer === '미확인 고객') customerName = '거주자';
  else customerName = customer.name;
};

const client2 = () => {
  const customer = site.customer;
  const plan =
    customer === '미확인 고객'
      ? registry.billingPlans.basic
      : customer.billingPlan;
};

const client3 = () => {
  const aCustomer = site.customer;

  const weeksDelinquent =
    aCustomer === '미확인 고객'
      ? 0
      : aCustomer.paymentHistory.weeksDelinquentInLastYear;
};

export {};
