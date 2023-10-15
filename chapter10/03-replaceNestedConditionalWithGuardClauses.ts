type PayAmountProps = typeof employee;

const someFinalComputation = () => {
  return { amount: 100, reasonCode: 'OFFICE' };
};

const payAmount = (employee: PayAmountProps) => {
  let result;
  if (employee.isSeperated)
    result = { amount: 0, reasonCode: 'SEP' }; // 퇴사했는가
  else {
    if (employee.isRetired)
      result = { amount: 0, reasonCode: 'RET' }; // 은퇴했는가 ?
    else {
      // 급여계산 로직
      result = someFinalComputation(); // 재직
    }
  }
  return result;
};

const employee = {
  isSeperated: true,
  isRetired: false,
};

console.log(payAmount(employee));

const adjustedCapital = (anInstrument: typeof instrumnet) => {
  let result = 0;
  if (anInstrument.capital > 0) {
    if (anInstrument.interestRate > 0 && anInstrument.duration > 0) {
      result =
        (anInstrument.income / anInstrument.duration) *
        anInstrument.adjustmentFactor;
    }
  }

  return result;
};

const instrumnet = {
  capital: 1,
  interestRate: 2,
  duration: 3,
  adjustmentFactor: 4,
  income: 5,
};

console.log(adjustedCapital(instrumnet).toFixed(2));

export {};
