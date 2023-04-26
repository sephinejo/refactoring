export function priceOrder(product, quantity, shippingMethod) {
  // produce base price
  const basePrice = product.basePrice * quantity;

  // discount
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;

  // shipping cost per item
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;

  // total shipping cost
  const shippingCost = quantity * shippingPerCase;

  // total price
  const price = basePrice - discount + shippingCost;

  return price;
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);
