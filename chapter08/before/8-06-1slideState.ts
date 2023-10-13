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

// pringcingPlan : 가격정책
// retrieve 가져오기
const pricingPlan = retrievePricingPlan();
const order = retrieveOrder();
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
