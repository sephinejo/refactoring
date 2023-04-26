export function price(order) {
  // 가격(price) = 기본가격 - 수량할인 + 배송비
  const basePrice = order.quantity * order.itemPrice;
  const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  return (
    basePrice - discount + Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
}
