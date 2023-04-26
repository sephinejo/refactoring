import fs from 'fs';

// 1. created function run and removed process dependeny of node
run(process.argv);

// 2. receive input from user
function run(args) {
  const rawData = fs.readFileSync(fileName);
  const orders = JSON.parse(rawData);
  if (command.countReadyOnly) {
    console.log(orders.filter((order) => order.status === 'ready').length);
  } else {
    console.log(orders.length);
  }
}

function parseCommand(args) {
  if (!args[2]) {
    throw new Error('파일 이름을 입력하세요');
  }

  const fileName = `./${args[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  const countReadyOnly = args.includes('-r');

  return {
    fileName,
    countReadyOnly,
  };
}
