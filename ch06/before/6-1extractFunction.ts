// 함수 추출하기
interface Invoice {
  orders: { amount: number }[];
  dueDate: Date;
  customer: string;
}

const printOwing = (invoice: Invoice) => {
  // 미해결 채무
  let outstanding = 0;

  console.log('****************');
  console.log('**** 고객 채무 ****');
  console.log('****************');

  // 미해결 채무 계산
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 마감 기록
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // 세부 사항 출력
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleString()}`);
};

const invoice: Invoice = {
  orders: [{ amount: 100 }, { amount: 200 }, { amount: 300 }],
  dueDate: new Date(),
  customer: '백현영',
};

printOwing(invoice);
