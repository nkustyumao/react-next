import { useState } from 'react';
import ChildA from './child-a';
import ChildB from './child-b';

const Parents = () => {
  const [parentData, setParentData] = useState('Parent Data');

  // 父母元件必須要先定義一組狀態，讓子女B元件傳遞回資料到父母來
  // 讓子女A得到資料
  const [dataFromChildB, setDataFromChildB] = useState('');
  return (
    <>
      <h1>Parent</h1>
      {/* 利用props傳遞得到的狀態 */}
      <ChildA dataFromChildB={dataFromChildB} parentData={parentData} />
      <hr />
      <h2>From ChildB Data :{dataFromChildB}</h2>
      {/* 利用props傳遞 設定狀態的方法 */}
      <ChildB setDataFromChildB={setDataFromChildB} />
    </>
  );
};

export default Parents;
