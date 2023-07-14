import { useState } from 'react';

export default function Counter() {
  // [獲得值得變數,設定值的方法] = useState(初始值)
  const [count, setCount] = useState(0);

  // 法一 arrow function
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </>
  );
}

//   法二 function
//   function setCountAdd() {
//     setCount(count + 1)
//   }

//   function setCountSub() {
//     setCount(count - 1)
//   }
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={setCountAdd}>+</button>
//       <button onClick={setCountSub}>-</button>
//     </>
//   )
// }
