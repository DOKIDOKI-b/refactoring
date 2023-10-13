// 온도 측정 데이터
const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};

const operatingPlan = {
  temperatureFloor: 48,
  temperatureCeiling: 55,
};

const readingsOutsideRange = (station, range) =>
  station.readings.filter((r) => r.temp < range.min || r.temp > range.max);
// 위의 코드가 아래의 클래스 메서드로써 들어갈 수 있다.

class NumberRange {
  constructor(min, max) {
    this._data = { min, max };
  }

  get min() {
    return this._data.min;
  }

  get max() {
    return this._data.max;
  }

  contains(arg) {
    return arg >= this.min && arg <= this.max;
  }
}

const range = new NumberRange(
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
);

console.log(range);

console.log(readingsOutsideRange(station, range));
