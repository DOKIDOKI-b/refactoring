type ShippingMethod = typeof shippingMethod;

type Product = (typeof products)[0];

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

const priceOrder = (
  product: Product,
  quantity: number,
  shippingMethod: ShippingMethod
) => {
  // 상품 정보 가격 계산
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;

  // 배송 정보 이용 계산
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

export {};
