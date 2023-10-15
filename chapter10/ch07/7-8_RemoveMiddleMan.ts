class Person {
  private _name;
  private _department?: Department;

  constructor(name: string, department: Department) {
    this._name = name;
    this._department = department;
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

  get manager() {
    return this._department?.manager ?? '매니저없음용';
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

console.log(worker.manager);

export {};
