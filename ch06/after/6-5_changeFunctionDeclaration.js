import assert from "assert";
// 간단한 절차 -> 바로 변경후 적용하자
const circumference = (radius) => {
  return 2 * Math.PI * radius;
};

// 마이그레이션 (간단하지 않은 절차)
class Book {
  _reservations = [];

  get reservation() {
    return this._reservations;
  }

  // this.zz_addReservation(customer, "호야"); 전달시에
  // AssertionError [ERR_ASSERTION]: false == true 에러반환
  addReservation(customer, isPriority) {
    // 특정 조건이 반드시 충족되어야 하는 메서드 assert (node.js 에서 제공)
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}

const bookcafe = new Book();
bookcafe.addReservation({ customer: "짱구" }, true);
bookcafe.addReservation({ customer: "훈이" }, false);
console.log(bookcafe.reservation);

// 마이그레이션 (더 복잡한 절차)
const someCustomers = [
  {
    name: "짱구",
    address: { state: "MA" },
  },
  {
    name: "훈이",
    address: { state: "CT" },
  },
  {
    name: "철수",
    address: { state: "ME" },
  },
  {
    name: "맹구",
    address: { state: "VT" },
  },
  {
    name: "유리",
    address: { state: "NH" },
  },
  {
    name: "수지",
    address: { state: "RI" },
  },
  {
    name: "나미리",
    address: { state: "DAEJEON" },
  },
];

const inNewEngland = (stateCode) => {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
};

// 중간과정
// const inNewEngland = (stateCode) => {
//   return xxInNewEngland(stateCode);
// };

// const xxInNewEngland = (stateCode) => {
//   return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
// };

const newEnglanders = someCustomers.filter((c) =>
  inNewEngland(c.address.state)
);

console.log(newEnglanders);
