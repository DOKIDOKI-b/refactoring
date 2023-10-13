// 함수 추출하기
import Invoice from '../before/6-1extractFunction';

const printBanner = () => {
  console.log('****************');
  console.log('**** 고객 채무 ****');
  console.log('****************');
};

const printDetail = (invoice: Invoice, outstanding: number) => {
  // 세부 사항 출력
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}원`);
  console.log(`마감일: ${invoice.dueDate.toLocaleString()}`);
};

// 마감 기록
const recordDueDate = (invoice: Invoice) => {
  const today = new Date();

  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
};

// 미해결 채무 계산
const calculateOutstanding = (invoice: Invoice) => {
  let result = 0;

  for (const o of invoice.orders) {
    result += o.amount;
  }

  return result;
};

const printOwing = (invoice: Invoice) => {
  printBanner();

  recordDueDate(invoice);

  const outstanding = calculateOutstanding(invoice);

  printDetail(invoice, outstanding);
};

const mrHundredinvoice = {
  orders: [{ amount: 100 }, { amount: 200 }, { amount: 300 }],
  dueDate: new Date(),
  customer: '백현영',
};

printOwing(mrHundredinvoice);
