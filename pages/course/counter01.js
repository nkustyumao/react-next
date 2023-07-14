import { useState } from 'react';

export default function Counter() {
  // [獲得值得變數,設定值的方法] = useState(初始值)
  const [count, setCount] = useState(0);

  // 解決異步函式的問題
  return (
    <>
      <h1>解決異步函式的問題</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          const newCount = count + 1;
          setCount(newCount);
          console.log(newCount);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          const newCount = count - 1;
          setCount(newCount);
          console.log(newCount);
        }}
      >
        -
      </button>
    </>
  );
}
