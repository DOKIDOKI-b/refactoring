const products = [
  {
    name: "samsung",
    status: "ready",
    basePrice: 3000,
    discountThreshold: 0.1,
    discountRate: 0.1,
  },
  {
    name: "apple",
    status: "pending",
    basePrice: 4000,
    discountThreshold: 0.05,
    discountRate: 0.04,
  },
  {
    name: "lg",
    status: "shipping",
    basePrice: 5000,
    discountThreshold: 0.1,
    discountRate: 0.09,
  },
];

const shippingMethod = {
  discountFee: 0.1,
  discountThreshold: 0.15,
  feePerCase: 0.05,
};

const priceOrder = (product, quantity, shippingMethod) => {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountFee
      : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;
  return price;
};

products.forEach((product) => {
  console.log(priceOrder(product, 30, shippingMethod));
});
