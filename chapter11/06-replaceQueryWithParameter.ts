const setToHeat = () => {};

const setToCool = () => {};

const setOff = () => {};

class HeatingPlan {
  private _min;
  private _max;

  constructor(min: number, max: number) {
    this._min = min;
    this._max = max;
  }

  get targetTemperature() {
    if (thermostat.selectedTemperature > this._max) return this._max;
    else if (thermostat.selectedTemperature < this._min) return this._min;
    else return thermostat.selectedTemperature;
  }
}

// 전역객체 의존성
const thermostat = {
  selectedTemperature: 23,
  currentTemperature: 27,
};

const temperatureController = () => {
  const heatingPlan = new HeatingPlan(18, 30);

  if (heatingPlan.targetTemperature > thermostat.currentTemperature)
    setToHeat();
  else if (heatingPlan.targetTemperature < thermostat.currentTemperature)
    setToCool();
  else setOff();
};

export {};
