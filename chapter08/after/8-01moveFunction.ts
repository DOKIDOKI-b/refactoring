function distance(p1: number, p2: number) {
  return radians(p2) - radians(p1);
}

function radians(degree: number) {
  return degree * (Math.PI / 180);
}

// function top_calculateDistance(points: Array<number>) {
function calculateDistance(points: Array<number>) {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
}

function trackSummary(points: Array<number>) {
  // function calculateDistance(points: Array<number>) {
  //   return top_calculateDistance(points);
  // }

  function calculateTime() {
    return 60;
  }

  const totalTime = calculateTime();
  const pace = totalTime / 60 / calculateDistance(points);

  return {
    time: totalTime,
    distance: calculateDistance(points),
    pace,
  };
}

console.log(trackSummary([1, 2, 3, 4]));

// p285 : 다른 클래스로 옮기기

interface TypeProps {
  isPremium: boolean;
}

abstract class Account {
  protected _daysOverdrawn: number;
  type: TypeProps;

  constructor(daysOverdrawn: number, type: TypeProps) {
    this._daysOverdrawn = daysOverdrawn;
    this.type = type;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) return (result += this.overdraftCharge);
    return result;
  }

  abstract get overdraftCharge(): number;
}

class TossBank extends Account {
  constructor(daysOverdrawn: number, type: { isPremium: boolean }) {
    super(daysOverdrawn, type);
  }

  get overdraftCharge() {
    if (this.type.isPremium) {
      const baseCharge = 10;
      if (this._daysOverdrawn <= 7) return baseCharge;
      return baseCharge + (this._daysOverdrawn - 7) * 0.85;
    }
    return this._daysOverdrawn * 1.75;
  }
}

const type = { isPremium: true };
const toss = new TossBank(10, type);

console.log(toss.overdraftCharge);

export {};
