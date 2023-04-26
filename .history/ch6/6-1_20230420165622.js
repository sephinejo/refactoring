export function printOwing(invoice) {
  // Log banner
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');

  // Calculate total amount
  let outstanding = 0;
  // calculate outstanding
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // Calculate payment date
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  // Print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);
