// Consolidate Conditional Expression

// ex) or 사용하기
const disabilityAmount = (anEmployee: typeof employee) => {
  if (anEmployee.seniority < 2) return 0;
  if (anEmployee.monthsDisabled > 12) return 0;
  if (anEmployee.isPartTime) return 0;
  return '아무것도 해당이 안되나봅니다...';
};

const employee = {
  seniority: 10,
  monthsDisabled: 10,
  isPartTime: false,
};
const employee2 = {
  seniority: 10,
  monthsDisabled: 10,
  isPartTime: true,
};

console.log(disabilityAmount(employee));
console.log(disabilityAmount(employee2));

// ex) and 사용하기
const disabilityAmount2 = (anEmployee: typeof employee3) => {
  if (anEmployee.onVacation) {
    if (anEmployee.seniority > 10) return 1;
  }
  return 0.5;
};

const employee3 = {
  onVacation: true,
  seniority: 11,
};

console.log(disabilityAmount2(employee3));

export {};
