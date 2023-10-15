import { formatToday } from '../utils/formatToday';

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
  summerEnd: new Date('2023-09-31'),
  summerRate: 5,
  regularRate: 5,
  regularServiceCharge: 100,
};

const discountRate = (quantity: number, aDate: Date) => {
  if (!isBefore(aDate, plan.summerStart) && !isAfter(aDate, plan.summerEnd))
    return quantity * plan.summerRate;
  return quantity * plan.regularRate + plan.regularServiceCharge;
};

const TODAY = new Date(formatToday());
const MY_BIRTHDAY = new Date('1994-12-10');

console.log(discountRate(10, new Date(TODAY)));
console.log(discountRate(10, new Date(MY_BIRTHDAY)));

export {};
