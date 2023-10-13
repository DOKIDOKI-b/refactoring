/**
 * 간단한 절차
 */

const circum = (radius: number) => {
  return 2 * Math.PI * radius;
};

/**
 * 마이그레이션 (간단하지 않은 절차) : 매개변수 하나만 추가
 */

export interface Customer {
  name: string;
  address?: {
    state: string;
  };
}

class Book {
  private _reservations: Customer[] = [];

  get reservation() {
    return this._reservations;
  }

  addReservation(customer: Customer) {
    this._reservations.push(customer);
  }

  // 새로운 기능을 추가할 메서드를 임의로 설정하고 addReservation 에서 호출하도록 바꾸자
  zz_addReservation(customer: Customer) {
    this._reservations.push(customer);
  }
}

const bookcafe = new Book();
bookcafe.addReservation({ name: '짱구' });
bookcafe.addReservation({ name: '훈이' });
console.log(bookcafe.reservation);

/**
 * 마이그레이션 (더 복잡한 절차)
 */
const someCustomers = [
  {
    name: '짱구',
    address: { state: 'MA' },
  },
  {
    name: '훈이',
    address: { state: 'CT' },
  },
  {
    name: '철수',
    address: { state: 'ME' },
  },
  {
    name: '맹구',
    address: { state: 'VT' },
  },
  {
    name: '유리',
    address: { state: 'NH' },
  },
  {
    name: '수지',
    address: { state: 'RI' },
  },
  {
    name: '나미리',
    address: { state: 'DAEJEON' },
  },
];

const inNewEngland = (aCustomer: Customer) => {
  return aCustomer?.address?.state && ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
};

const newEnglanders = someCustomers.filter(c => inNewEngland(c));

console.log(newEnglanders);
