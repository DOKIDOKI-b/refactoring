// 함수 추출하기
const debtMan = {
  customer: "빚쟁이",
  orders: [
    { name: "사채", amount: 10000 },
    { name: "대출", amount: 50000 },
  ],
};

const printBanner = () => {
  console.log("****************");
  console.log("**** 고객 채무 ****");
  console.log("****************");
};

const printDetail = (invoice, outstanding) => {
  // 세부 사항 출력
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueData.toLocaleString()}`);
};

// 마감 기록
const recordDueDate = (invoice) => {
  const today = new Date();

  invoice.dueData = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
};

// 미해결 채무 계산
const calculateOutstanding = (invoice) => {
  let result = 0;

  for (const o of invoice.orders) {
    result += o.amount;
  }

  return result;
};

const printOwing = (invoice) => {
  printBanner();

  recordDueDate(invoice);

  const outstanding = calculateOutstanding(invoice);

  printDetail(invoice, outstanding);
};

printOwing(debtMan);
