/**
 * 간단한 레코드 캡슐화하기 p.238
 */
const organization = { name: '애크미 구스베리', country: 'GB' };

const getRawDataOfOrganization = () => ({ ...organization });

const readOrganization = () => {
  return `<h1>${getRawDataOfOrganization().name}</h1>`;
};

const setOrganization = (newName: string) => {
  getRawDataOfOrganization().name = newName;
};

/**
 * 중첩된 레코드 캡슐화하기 p.240
 */
const customerData = {
  '1920': {
    name: '마틴 파울러',
    id: '1920',
    usages: {
      2016: {
        1: 50,
        2: 55,
      },
      2015: {
        1: 70,
        2: 63,
      },
    },
  },
  38673: {
    name: '닐 포드',
    id: '38673',
    usages: {
      2016: {
        1: 30,
        2: 45,
      },
      2015: {
        1: 60,
        2: 73,
      },
    },
  },
};

// interface CustomerData {
//   [id : number] : {
//     name: string,
//     id : string
//     usages : {
//       [year : number] : {
//         [month : number] : number
//       }
//     }
//   }
// }

type CustomerID = {};

type Usage = { [key: number]: number };
type Customer = {
  name: string;
  id: string;
  usages: { [key: number]: Usage };
};
type CustomerData = { [key: number]: Customer };

const writeData: CustomerData = (customerId, year, month, amount) => {
  if (!customerData[customerId]) throw new Error('잘못된 customerID');
  customerData[customerId].usages[year][month] = amount;
};

const compareUsage = (customerId: number, laterYear: number, month: number) => {
  const later = customerData[customerId].usages[laterYear][month];
  const earlier = customerData[customerId].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
};

const getCustomer = () => customerData;

export {};
