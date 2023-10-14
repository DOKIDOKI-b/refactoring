interface Person {
  name: string;
  country: string;
}

class Organization {
  private _name;
  private _country;

  constructor({ name, country }: Person) {
    this._name = name;
    this._country = country;
  }
  get name() {
    return this._name;
  }
  set name(aString) {
    this._name = aString;
  }
  get country() {
    return this._country;
  }
  set country(aCountry) {
    this._country = aCountry;
  }
}

const berryberry = {
  name: '애크미 구스베리',
  country: 'GB',
};

const organization = new Organization(berryberry);

export {};
