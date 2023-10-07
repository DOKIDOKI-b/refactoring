interface SoHotProps {
  aRoom: Room;
  aPlan: HeatingPlan;
}

class HeatingPlan {
  _temperatureRange;

  constructor(low: number, high: number) {
    this._temperatureRange = { low, high };
  }

  withinRange(bottom: number, top: number) {
    return (
      bottom >= this._temperatureRange.low && top >= this._temperatureRange.high
    );
  }
}

class Room {
  private _daysTempRange;

  constructor(low: number, high: number) {
    this._daysTempRange = { low, high };
  }

  get daysTempRange() {
    return this._daysTempRange;
  }
}

const room = new Room(18, 30);
const plan = new HeatingPlan(24, 27);

const soHot = ({ aRoom, aPlan }: SoHotProps) => {
  const low = aRoom.daysTempRange.low;
  const high = aRoom.daysTempRange.high;

  if (!aPlan.withinRange(low, high)) {
    console.log('방 온도가 지정 범위를 벗어났습니다.');
  }
};

soHot({ aRoom: room, aPlan: plan });

export {};
