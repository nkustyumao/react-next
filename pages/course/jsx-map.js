import React from 'react';

export default function JsxMap() {
  const users = ['John', 'Mary', 'Bob'];

  //   const dispalyUsers = users.map((v, i) => {
  //     return <li key={i}>{v}</li>;
  //   });
  return (
    <>
      <h1>JSX中使用陣列map方法範例</h1>
      {/* <ul>{dispalyUsers}</ul> */}
      {/* key值是必要的 不可重複 */}
      {/* 使用陣陣列索引(index)作為key實際為反樣式(anti-pattern) */}
      {/* 唯一能使用索引作為key的情況 只有靜態資料(應用執行過程完全不會變) */}
      {/* key值的選擇:
      1. 資料來自資料庫 用資料庫的主見當key(這個最好)
      2. 資料由應用中值興產生，使用uuid或nanoid函示庫來產生key值。(但是不可以再渲染時產生 應在建立時產生key)
      3. 自己寫隨機術或日期物件轉整數
       */}
      <ul>
        {users.map((v, i) => {
          return <li key={i}>{v}</li>;
        })}
      </ul>
    </>
  );
}
