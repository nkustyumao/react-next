import React from 'react';

const ChildA = (props) => (
  <>
    <h1>ChildA</h1>
    <h2>From Parent Data : {props.parentData}</h2>
    <h2>ChlidB to ChildA Data : {props.dataFromChildB}</h2>
  </>
);

export default ChildA;
