import fs from 'fs';

// 1. created function run and removed process dependeny of node
run(process.argv);

// 2. receive input from user
// 3. logic
function run(args) {
  countOrders(parseCommand(args));
}

function parseCommand(args) {
  if (!args[2]) {
    throw new Error('Enter file name');
  }

  const fileName = `./${args[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('File does not exist');
  }

  return {
    fileName,
    countReadyOnly: args.includes('-r'),
  };
}

function countOrders({ fileName, countReadyOnly }) {
  const rawData = fs.readFileSync(fileName);
  const orders = JSON.parse(rawData);
  const filtered = countReadyOnly
    ? orders.filter((order) => order.status === 'ready')
    : orders;
  console.log(filtered.length);
}
