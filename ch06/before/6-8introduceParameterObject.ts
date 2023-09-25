// 온도 측정 데이터
interface Reading {
  temp: number;
  time: string;
}

interface Station {
  name: string;
  readings: Reading[];
}

interface OperatingPlan {
  temperatureFloor: number;
  temperatureCeiling: number;
}

const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};

const operatingPlan = {
  temperatureFloor: 48,
  temperatureCeiling: 55,
};

const readingsOutsideRange = (station: Station, min: number, max: number) =>
  station.readings.filter(r => r.temp < min || r.temp > max);

console.log(
  readingsOutsideRange(
    station,
    operatingPlan.temperatureFloor, // 최저
    operatingPlan.temperatureCeiling // 최고
  )
);

export {};
