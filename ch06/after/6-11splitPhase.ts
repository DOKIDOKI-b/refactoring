const products = [
  {
    name: 'samsung',
    status: 'ready',
    basePrice: 3000,
    discountThreshold: 0.1,
    discountRate: 0.1,
  },
  {
    name: 'apple',
    status: 'pending',
    basePrice: 4000,
    discountThreshold: 0.05,
    discountRate: 0.04,
  },
  {
    name: 'lg',
    status: 'shipping',
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

type ShippingMethod = typeof shippingMethod;

type Product = (typeof products)[0];

interface priceData {
  basePrice: number;
  quantity: number;
  discount: number;
}

const calculatePricingData = (product: Product, quantity: number) => {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;

  return { basePrice, quantity, discount };
};

// 1번단계
const priceOrder = (product: Product, quantity: number, shippingMethod: ShippingMethod) => {
  const priceData = calculatePricingData(product, quantity);

  return applyShipping(priceData, shippingMethod);
};

// 2번째 단계
const applyShipping = (priceData: priceData, shippingMethod: ShippingMethod) => {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold ? shippingMethod.discountFee : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;

  return priceData.basePrice - priceData.discount + shippingCost;
};

products.forEach(product => {
  console.log(priceOrder(product, 30, shippingMethod));
});
