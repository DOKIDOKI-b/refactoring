type Reading = {
  temp: number;
  time: string;
};

class Station {
  name;
  readings;

  constructor(name: string, readings: Reading[]) {
    this.name = name;
    this.readings = readings;
  }
}

const station = new Station('ZB1', [
  { temp: 47, time: '2016-11-10 09:10' },
  { temp: 53, time: '2016-11-10 09:20' },
  { temp: 58, time: '2016-11-10 09:30' },
  { temp: 53, time: '2016-11-10 09:40' },
  { temp: 51, time: '2016-11-10 09:50' },
]);

type OperatingPlan = {
  temperatureFloor: number;
  temperatureCeiling: number;
};

const operatingPlan: OperatingPlan = {
  temperatureFloor: 48,
  temperatureCeiling: 55,
};

class NumberRange {
  private _data: { min: number; max: number };

  constructor(min: number, max: number) {
    this._data = { min, max };
  }

  get min(): number {
    return this._data.min;
  }

  get max(): number {
    return this._data.max;
  }

  contains(arg: number): boolean {
    return arg >= this.min && arg <= this.max;
  }
}

const range: NumberRange = new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);

const readingsOutsideRange = (station: Station, range: NumberRange): Reading[] =>
  station.readings.filter(r => !range.contains(r.temp));

console.log(range);
console.log(readingsOutsideRange(station, range));

export {};
