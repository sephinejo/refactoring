import fs from 'fs';

// 1. created function run
run(process.argv);

function run(args) {
  if (!process.argv[2]) {
    throw new Error('파일 이름을 입력하세요');
  }

  const fileName = `./${process.argv[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  const rawData = fs.readFileSync(fileName);
  const orders = JSON.parse(rawData);
  if (process.argv.includes('-r')) {
    console.log(orders.filter((order) => order.status === 'ready').length);
  } else {
    console.log(orders.length);
  }
}
