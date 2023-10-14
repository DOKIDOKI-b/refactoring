class TelephoneNumber {
  private _areaCode: string = 'setter에서 할당해주세요';
  private _number: string = 'setter에서 할당해주세요';

  get areaCode() {
    return this._areaCode;
  }
  set areaCode(arg: string) {
    this._areaCode = arg;
  }

  get number() {
    return this._number;
  }
  set number(arg: string) {
    this._number = arg;
  }
}

class Person {
  private _telephoneNumber: TelephoneNumber;

  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  set officeAreaCode(arg) {
    this._telephoneNumber.areaCode = arg;
  }

  get officeNumber() {
    return this._telephoneNumber.number;
  }
  set officeNumber(arg) {
    this._telephoneNumber.number = arg;
  }
}

const person = new Person();
person.officeAreaCode = '042';
person.officeNumber = '1004-4885';
console.log(person.officeAreaCode, person.officeNumber);

export {};
