// JavaScript版（型チェックなし）
function calculateTotal(items) {
  let total = 0;
  for (let item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

// 正常なデータ
const goodItems = [
  { name: "りんご", price: 100, quantity: 3 },
  { name: "バナナ", price: 80, quantity: 2 }
];

// バグのあるデータ（誰かが間違えた）
const buggyItems = [
  { name: "りんご", price: 100, quantity: 3 },
  { name: "バナナ", prise: 80, quantity: 2 }      // "price"を"prise"と間違えた！
];

console.log("正常:", calculateTotal(goodItems));
console.log("バグあり:", calculateTotal(buggyItems));