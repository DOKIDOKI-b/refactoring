/**
 * 간단한 레코드 캡슐화하기 p.238
 */
const organization = { name: '애크미 구스베리', country: 'GB' };

const readOrganization = () => {
  return `<h1>${organization.name}</h1>`;
};

const setOrganization = (newName: string) => {
  organization.name = newName;
};

setOrganization('백현영');

console.log(organization);

/**
 * 중첩된 레코드 캡슐화하기 p.240
 */
const customerData = {
  1920: {
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

// const writeData = (customerId: number, year: number, month: number, amount: number) => {
//   customerData[customerId].usages[year][month] = amount;
// };

// const compareUsage = (customerId, laterYear, month) => {
//   const later = customerData[customerId].usages[laterYear][month];
//   const earlier = customerData[customerId].usages[laterYear - 1][month];
//   return { laterAmount: later, change: later - earlier };
// };

// console.log(writeData(customerData));
// console.log(compareUsage(customerData));

export {};
