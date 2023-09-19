// acc에 값을 2번 대입함 -> 역할이 두개라는 신호
type Scenario = typeof scenario;

const distanceTravelled = (scenario: Scenario, time: number) => {
  let result;
  let acc = scenario.primaryForce / scenario.mass; // 가속도 = 힘 / 질량
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * acc * primaryTime ** 2; // 전파된 거리
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    // 두번째 힘을 반영해 다시 계싼
    let primaryVelocity = acc * scenario.delay;
    acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result += primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime ** 2;
  }
  return result;
};

const scenario = {
  primaryForce: 100,
  secondaryForce: 10,
  mass: 10,
  delay: 40,
};

console.log(distanceTravelled(scenario, 10));
