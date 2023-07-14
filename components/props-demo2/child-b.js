import { useState } from 'react';

const ChildB = (props) => {
  const [childBData, setChildBData] = useState('ChildB Data');

  return (
    <>
      <h1>ChildB</h1>
      {/* 觸發事件利用事件函式 傳資料到父母 */}
      <button
        onClick={() => {
          props.setDataFromChildB(childBData);
        }}
      >
        傳遞資料給父母
      </button>
    </>
  );
};

export default ChildB;
