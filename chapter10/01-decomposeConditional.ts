// Decompose Conditional
const isBefore = (date1: Date, date2: Date) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return d1 < d2;
};

const isAfter = (date1: Date, date2: Date) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return d1 > d2;
};

const plan = {
  summerStart: new Date('2023-06-01'),
  summerEnd: new Date('2021-09-31'),
  summerRate: 5,
  regularRate: 5,
  regularServiceCharge: 100,
};

const discountRate = (quantity: number, aDate: Date) => {
  if (!isBefore(aDate, plan.summerStart) && !isAfter(aDate, plan.summerEnd))
    return quantity * plan.summerRate;
  return quantity * plan.regularRate + plan.regularServiceCharge;
};
console.log(discountRate(10, new Date('2021-06-29')));
console.log(discountRate(10, new Date('2021-08-15')));

export {};
