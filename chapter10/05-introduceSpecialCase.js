class Site {
  #customer;

  get customer() {
    return this.#customer;
  }
}

class Customer {
  #name;
  #billingPlan;
  #paymentHistory;

  get name() {
    return this.#name;
  }
  get billingPlan() {
    return this.#billingPlan;
  }
  set billingPlan(arg) {
    this.#billingPlan = arg;
  }
  get paymentHistory() {
    return this.#paymentHistory;
  }
}

const site = new Site();

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
  const customer = site.customer;
  if (customer !== '미확인 고객') customer.billingPlan = 'new Plan';
};

const client4 = () => {
  const customer = site.customer;
  const weeksDelinquent =
    customer === '미확인 고객'
      ? 0
      : customer.paymentHsitry.weeksDelinquentInLastYear;
};

const uniqueClient = () => {
  const aCustomer = site.customer;
  const name = !isUnkown(aCustomer) ? aCustomer.name : '미확인 거주자';
};

export {};
