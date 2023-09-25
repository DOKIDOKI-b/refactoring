// Consolidate Conditional Expression

// ex) or 사용하기
const disabilityAmount = (anEmployee: typeof employee) => {
  if (anEmployee.seniority < 2) return 0;
  if (anEmployee.monthsDisabled > 12) return 0;
  if (anEmployee.isPartTime) return 0;
  // 장애 수당 계산
};

const employee = {
  seniority: 10,
  monthsDisabled: 10,
  isPartTime: false,
};

// ex) and 사용하기
const disabilityAmount2 = (anEmployee: typeof employee2) => {
  if (anEmployee.onVacation) {
    if (anEmployee.seniority > 10) return 1;
  }
  return 0.5;
};

const employee2 = {
  onVacation: true,
  seniority: 11,
};
