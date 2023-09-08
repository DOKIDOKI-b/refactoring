class Person {
  private _name;
  private _department?: Department;

  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
  set department(arg) {
    this._department = arg;
  }
}

class Department {
  private _chargeCode;
  private _manager;

  constructor(chargeCode: string, manager: string) {
    this._chargeCode = chargeCode;
    this._manager = manager;
  }
  get chargeCode() {
    return this._chargeCode;
  }
  set chargeCode(arg) {
    this._chargeCode = arg;
  }
  get manager() {
    return this._manager;
  }
  set manager(arg) {
    this._manager = arg;
  }
}

const newDepartment = new Department('영차', '이경영');
const worker = new Person('이경영');
worker.department = newDepartment;

console.log(worker.department.manager);

export {};
