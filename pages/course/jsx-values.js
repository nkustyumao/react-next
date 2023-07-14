import React from 'react';

export default function JsxValues() {
  return (
    <>
      <h1>JSX語法中各種值渲染呈現</h1>
      <h2>Number</h2>
      {123 - 99}
      {NaN}
      <h2>String</h2>
      abc
      {'def'}
      {`price = ${100 - 5}`}
      <h2>Boolean</h2>
      {/*  */}
      {true}
      {false}
      <h2>Null</h2>
      {null}
      <h2>undefined</h2>
      {undefined}
      <h2>Array</h2>
      {/* 陣列會將元素合併並且轉為字串 */}
      {['a', 'b', 'c']}
      <h2>object</h2>
      {/* 不能直接渲染 會造成中斷錯誤 */}
      {{ id: 1, name: 'product 1', price: 100 }}
      <h2>function</h2>
      {/* 會有警告不呈現 */}
      {function () {}}
      {() => {}}
    </>
  );
}
