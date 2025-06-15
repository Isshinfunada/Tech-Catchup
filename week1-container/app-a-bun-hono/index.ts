// TypeScriptの型定義
interface User {
  name: string;
  age: number;
}

// 型注釈付きの関数
function greetUser(user: User): string {
  return `Hello ${user.name}, you are ${user.age} years old!`;
}

// 実行
const user: User = { name: "Bun User", age: 25 };
console.log("Hello via Bun!");
console.log(greetUser(user));

// 意図的に型エラーを作成
const wrongUser: User = { name: "Wrong User", age: "25" }; // ageは文字列
console.log(greetUser(wrongUser));
