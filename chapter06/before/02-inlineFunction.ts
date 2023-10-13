// 6-2-1
interface Driver {
  numberOfLateDeliveries: number;
}

const moreThanFiveLateDeliveries = (aDriver: Driver) => {
  return aDriver.numberOfLateDeliveries > 5;
};

const rating = (aDriver: Driver) => {
  return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
};

const taxiDriver = {
  numberOfLateDeliveries: 10,
};

console.log(rating(taxiDriver));

// 6-2-2
interface Customer {
  name: string;
  location: string;
}

const gatherCustomerData = (out: string[][], aCunstomer: Customer) => {
  out.push(['name', aCunstomer.name]);
  out.push(['location', aCunstomer.location]);
};

const reportLines = (aCunstomer: Customer) => {
  const lines: string[][] = [];
  gatherCustomerData(lines, aCunstomer);
  return lines;
};

const customer = {
  name: '현영',
  location: '대전',
};

console.log(reportLines(customer));

export {};
