class Person {
  #firstName;

  constructor(data) {
    this._lastName = data.lastName;
    this.#firstName = data.firstName;
  }

  get lastName() {
    return this._lastName;
  }

  set setfirstName(name) {
    this.#firstName = name;
  }

  print() {
    console.log(this.#firstName, this._lastName);
  }
}

let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };
// 레코드 캡슐화하기
export const defaultOwner = () => new Person(defaultOwnerData);
export const setDefaultOwner = (arg) => {
  defaultOwnerData = arg;
};

const owner1 = defaultOwner();
const owner2 = defaultOwner();

console.log(owner2.firstName);
owner2.print();
