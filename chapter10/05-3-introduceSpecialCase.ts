/**
 * @page : 398
 * 변환 함수 이용하기
 */

type RegisteredCustomer = Exclude<(typeof JSONRecord)[0]['customer'], string>;

type UnknownCustomer = '미확인 고객';

const obj = [
  {
    name: 213,
  },
  { name: '안녕' },
];

type OBJ = (typeof obj)[0];

const arr = [1, '야', true];

type Arr = (typeof arr)[1];

type Customer = RegisteredCustomer | UnknownCustomer;

const JSONRecord = [
  {
    name: '애크미 보스턴',
    location: 'Malden MA',
    customer: {
      name: '애크미 산업',
      billingPlan: 'plan-451',
      paymentHistory: {
        weeksDelinquentInLastYear: 7,
      },
    },
  },
  {
    name: '물류창고 15',
    location: 'Malden MA',
    customer: '미확인 고객',
  },
];

const registry = {
  billingPlans: {
    basic: '처음 오신 고갱님이니 기본으로..',
    vip: '어서오십셔 !',
  },
  name: '김비빔',
};

class Site {
  private _customer: Customer = '미확인 고객';

  get customer() {
    return this._customer;
  }
}

const acquireSiteData = () => new Site();

const client1 = () => {
  const site = acquireSiteData();
  const aCustomer = site.customer;
  // ...수많은 코드
  let customerName;
  if (aCustomer === '미확인 고객') customerName = '거주자';
  else customerName = aCustomer.name;
};

const client2 = () => {
  const site = acquireSiteData();
  const aCustomer = site.customer;
  const plan =
    aCustomer === '미확인 고객'
      ? registry.billingPlans.basic
      : aCustomer.billingPlan;
};

const client3 = () => {
  const site = acquireSiteData();
  const aCustomer = site.customer;

  const weeksDelinquent =
    aCustomer === '미확인 고객'
      ? 0
      : aCustomer.paymentHistory.weeksDelinquentInLastYear;
};

export {};
