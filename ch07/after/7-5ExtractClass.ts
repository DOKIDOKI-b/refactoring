type PersonProps = typeof personInfo;

type TelephoneProperty = Pick<PersonProps, 'telephone'>;

type TelephoneProps = TelephoneProperty['telephone'];

type TelephoneProps2 = (typeof personInfo)['telephone'];

class Person {
  private _name;
  private _telephone;

  constructor(info: PersonProps) {
    this._telephone = new Telephone(info.telephone);
    this._name = info.name;
  }
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get officeAreaCode() {
    return this._telephone.areaCode;
  }
  set officeAreaCode(arg) {
    this._telephone.areaCode = arg;
  }
  get officeNumber() {
    return this._telephone.number;
  }
  set officeNumber(arg) {
    this._telephone.number = arg;
  }
  get telephoneNumber() {
    return this._telephone.toString;
  }
}

class Telephone {
  private _areaCode;
  private _number;

  constructor(info: TelephoneProps) {
    this._areaCode = info.officeAreaCode;
    this._number = info.officeNumber;
  }
  get areaCode() {
    return this._areaCode;
  }
  set areaCode(arg) {
    this._areaCode = arg;
  }
  get number() {
    return this._number;
  }
  set number(arg) {
    this._number = arg;
  }
  get toString() {
    return `(${this.areaCode}) ${this.number}`;
  }
}

const personInfo = {
  name: '현영',
  telephone: {
    officeAreaCode: '042',
    officeNumber: 12345678,
  },
};

const mrHundred = new Person(personInfo);
console.log(mrHundred.officeAreaCode);
console.log(mrHundred.officeNumber);
console.log(mrHundred.telephoneNumber);

export {};
