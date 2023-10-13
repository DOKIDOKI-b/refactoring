export const retrievePricingPlan = () => ({
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

// pringcingPlan : 가격정책
// retrieve 가져오기
const pricingPlan = retrievePricingPlan();
const baseCharge = pricingPlan.baseCharge;
const chargePerUnit = pricingPlan.units;

const order = retrieveOrder();
const units = order.units;

let discount;
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);
discount = discountableUnits * pricingPlan.discountFactor;

if (order.isRepeat) discount += 20;

let charge;
charge = baseCharge + units * chargePerUnit;
// 변수 쪼개기 -> 9.1
// charge = charge - discount;
const discoutedCharge = charge - discount;
chargeOrder(discoutedCharge);
