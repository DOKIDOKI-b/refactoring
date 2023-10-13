type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Reading = ReturnType<typeof acquireReading>;

interface CalculateBaseChargeProps extends Reading {}

type ModifiedReading = Omit<Reading, 'month'> & { month: Month };

const acquireReading = () => ({
  customer: 'ivan',
  quantity: 10,
  month: 5 as Month,
  year: 2017,
});

const baseRate = (month: number, year: number) => year - 2000 + month;

const client1 = () => {
  const aReading = acquireReading();
  const baseCharge =
    baseRate(aReading.month, aReading.year) * aReading.quantity;
  return baseCharge;
};

const client2 = () => {
  const taxThreshold = (year: number) => (year - 2000) * 0.1;
  const aReading = acquireReading();
  const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
  const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
  return taxableCharge;
};

const client3 = () => {
  const aReading = acquireReading();
  const calculateBaseCharge = (aReading: ModifiedReading) =>
    baseRate(aReading.month, aReading.year) * aReading.quantity;
  const basicChargeAmount = calculateBaseCharge(aReading);
  return basicChargeAmount;
};

console.log(client1());
console.log(client2());
console.log(client3());

export {};
