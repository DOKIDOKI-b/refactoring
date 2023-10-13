// 6-2-1
export interface Driver {
  numberOfLateDeliveries: number;
}

const rating = (aDriver: Driver) => {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
};

const taxiDriver = {
  numberOfLateDeliveries: 10,
};

console.log(rating(taxiDriver));

// 6-2-2
export interface Customer {
  name: string;
  location: string;
}

const reportLines = (aCunstomer: Customer) => {
  return [
    ['name', aCunstomer.name],
    ['location', aCunstomer.location],
  ];
};

const customer = {
  name: '현영',
  location: '대전',
};

console.log(reportLines(customer));
