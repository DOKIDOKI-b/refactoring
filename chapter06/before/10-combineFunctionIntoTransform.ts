type Reading = ReturnType<typeof acquireReading>;

interface Person {
  name: string;
  age: number;
}

type AnyObject = { [key: string]: any };

const deepCopy = (obj: any): any => {
  if (obj === null || typeof obj !== 'object') return obj;

  if (Array.isArray(obj)) return obj.map((item) => deepCopy(item));

  if (obj instanceof Object) {
    return Object.keys(obj).reduce((copy: AnyObject, attr: string) => {
      copy[attr] = deepCopy(obj[attr]);
      return copy;
    }, {});
  }
};

const baseRate = (month: number, year: number) => year - 2000 + month;

const calculateBaseCharge = (aReading: Reading) =>
  baseRate(aReading.month, aReading.year) * aReading.quantity;

const taxThreshold = (year: number) => (year - 2000) * 0.1;

const enrichReading = (original: Reading) => {
  const result = deepCopy(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year)
  );
  return result;
};

const acquireReading = () => ({
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017,
});

const client1 = () => {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  return aReading.baseCharge;
};

const client2 = () => {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  return aReading.taxableCharge;
};

const client3 = () => {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  return aReading.baseCharge;
};

const clients = [client1, client2, client3];
clients.forEach((c) => console.log(c()));

export {};
