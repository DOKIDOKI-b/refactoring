const deepCopy = (obj: unknown{}) => {
  if (obj === null || typeof obj !== 'object') return obj;

  if (Array.isArray(obj)) return obj.map(item => deepCopy(item));

  if (obj instanceof Object) {
    return Object.keys(obj).reduce((copy, attr) => {
      copy[attr] = deepCopy(obj[attr]);
      return copy;
    }, {});
  }
};

const baseRate = (month, year) => year - 2000 + month;
const calculateBaseCharge = aReading => baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxThreshold = year => (year - 2000) * 0.1;

const enrichReading = (original: Reading) => {
  const result = deepCopy(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));
  return result;
};

const acquireReading = () => ({
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017,
});

type Reading = ReturnType<typeof acquireReading>;

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
clients.forEach(c => console.log(c()));

export {};


interface Person {
  name: string
  age: number
}

const 채림:Person = {
  name : '채림',
  age: 10
}


const 채림2: Omit<Person, 'age'> & {gender : string}  = { 
  name: 'asd',
  gender: 'F',
}