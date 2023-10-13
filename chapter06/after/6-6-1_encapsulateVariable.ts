interface PersonProps {
  lastName: string;
  firstName: string;
}

class Person {
  firstName;
  lastName;

  constructor(data: PersonProps) {
    this.lastName = data.lastName;
    this.firstName = data.firstName;
  }

  get lastName() {
    return this.lastName;
  }

  set setfirstName(name) {
    this.firstName = name;
  }

  print() {
    console.log(this.firstName, this.lastName);
  }
}

let defaultOwnerData = { firstName: '마틴', lastName: '파울러' };
// 레코드 캡슐화하기
export const defaultOwner = () => new Person(defaultOwnerData);
export const setDefaultOwner = (arg: PersonProps) => {
  defaultOwnerData = arg;
};

const owner1 = defaultOwner();
const owner2 = defaultOwner();

console.log(owner2.firstName);
owner2.print();

export {};
