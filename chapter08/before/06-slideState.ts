const retrievePricingPlan = () => ({
  baseCharge: 10000,
  units: 100,
  discountThreshold: 3,
  discountFactor: 5,
});

const retrieveOrder = () => ({
  units: 10,
  isRepeat: true,
});

const chargeOrder = (arg: number | string) => console.log(arg);

const pricingPlan = retrievePricingPlan();
const order = retrieveOrder(); // retrieve 가져오기
const baseCharge = pricingPlan.baseCharge;
let charge;
const chargePerUnit = pricingPlan.units;
const units = order.units;
let discount;
charge = baseCharge + units * chargePerUnit;
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);
discount = discountableUnits * pricingPlan.discountFactor;
if (order.isRepeat) discount += 20;
charge = charge - discount;
chargeOrder(charge);

/**
 * @page : 314
 * 예시 : 조건문이 있을 때의 슬라이드
 */

const createResource = () => ({});

const availableResources: Array<unknown> = [];

const allocatedResources = [];

const foo = () => {
  let result;
  if (availableResources.length === 0) {
    result = createResource();
    allocatedResources.push(result);
  } else {
    result = availableResources.pop();
    allocatedResources.push(result);
  }
  return result;
};

console.log(foo());

export {};
