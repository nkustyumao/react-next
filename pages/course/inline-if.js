import { useState } from 'react';

export default function InlineIf() {
  const [count, setCount] = useState({ total: 1 });

  return (
    <>
      <h1>{count.total}</h1>
      <button
        onClick={() => {
          setCount({ total: count.total + 1 });
        }}
      >
        +
      </button>
      <hr />
      {/* && 前面的運算要能運算出布林值 此語法才會穩固 */}
      {/* {!!count && <h2>message : count {count}</h2>} */}
      {/* 強制轉型 */}
      {/* {Boolean(count) && <h2>message : count {count}</h2>} */}
      {/* 用判斷 */}
      {/* {count !== 0 && <h2>message : count {count}</h2>} */}
    </>
  );
}
