// 함수 추출하기

const printOwing = (invoice) => {
  // 미해결 채무
  let outstanding = 0;

  console.log("****************");
  console.log("**** 고객 채무 ****");
  console.log("****************");

  // 미해결 채무 계산
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 마감 기록
  const today = new Date();
  invoice.dueData = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  // 세부 사항 출력
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleString()}`);
};
