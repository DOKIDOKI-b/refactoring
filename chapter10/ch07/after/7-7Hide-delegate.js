// 클라이언트
class Person {
  #name;
  #department;
  constructor(name) {
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
  set department(arg) {
    this.#department = arg;
  }
  get manager() {
    return this.#department.manager;
  }
}

// 서버 (위임 객체)
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

// department를 알 필요가 없어짐
console.log(worker.manager);
