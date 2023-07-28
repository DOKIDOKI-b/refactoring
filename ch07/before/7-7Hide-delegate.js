class Person {
  #name;
  #department;
  constructor(name) {
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
  get department() {
    return this.#department;
  }
  set department(arg) {
    this.#department = arg;
  }
}

class Department {
  #chargeCode;
  #manager;
  constructor(chargeCode, manager) {
    this.#chargeCode = chargeCode;
    this.#manager = manager;
  }
  get chargeCode() {
    return this.#chargeCode;
  }
  set chargeCode(arg) {
    this.#chargeCode = arg;
  }
  get manager() {
    return this.#manager;
  }
  set manager(arg) {
    this.#manager = arg;
  }
}

const newDepartment = new Department("부장", "백");
const worker = new Person("현영");
worker.department = newDepartment;

console.log(worker.department.manager);
