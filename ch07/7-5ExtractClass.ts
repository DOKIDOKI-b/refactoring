type PersonProps = typeof personInfo;

class Person {
  private _name;
  private _officeAreaCode;
  private _officeNumber;

  constructor(info: PersonProps) {
    this._name = info.name;
    this._officeAreaCode = info.officeAreaCode;
    this._officeNumber = info.officeNumber;
  }
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get officeAreaCode() {
    return this._officeAreaCode;
  }
  set officeAreaCode(arg) {
    this._officeAreaCode = arg;
  }
  get officeNumber() {
    return this._officeNumber;
  }
  set officeNumber(arg) {
    this._officeNumber = arg;
  }
  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }
}

const personInfo = {
  name: '현영',
  officeAreaCode: '042',
  officeNumber: 12341234,
};

const mrHundred = new Person(personInfo);
console.log(mrHundred.officeAreaCode);
console.log(mrHundred.officeNumber);
console.log(mrHundred.telephoneNumber);

export {};
