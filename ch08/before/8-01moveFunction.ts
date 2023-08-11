// p280 : 중첩 함수를 최상위로 옮기기
export function trackSummary(points: Array<number>) {
  function distance(p1: number, p2: number) {
    return radians(p2) - radians(p1);
  }

  function calculateTime() {
    return 60;
  }

  function radians(degree: number) {
    return 90;
  }

  function calculateDistance(points: Array<number>) {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i]);
    }
    return result;
  }

  // 정말 확실하다 or 2차원배열 -> number[];
  const totalTime = calculateTime();
  const totalDistance = calculateDistance(points);
  const pace = totalTime / 60 / totalDistance;

  return {
    time: totalTime,
    distance: totalDistance,
    pace,
  };
}

console.log(trackSummary([1, 2, 3, 4]));

interface TypeProps {
  isPremium: boolean;
}

// p285 : 다른 클래스로 옮기기
export class Account {
  _daysOverdrawn;
  type;

  constructor(daysOverdrawn: number, type: TypeProps) {
    this._daysOverdrawn = daysOverdrawn;
    this.type = type;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) return (result += this.overdraftCharge);
    return result;
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
