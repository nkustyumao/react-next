import { set } from 'lodash';
import { useState } from 'react';

const objArray = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
];

export default function ObjectArray() {
  // 與呈現有關必需先成為state
  const [data, setData] = useState(objArray);

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
      <h2>操作</h2>
      <p>
        <strong>
          注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
        </strong>
        有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
      </p>

      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' };

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const newData = [newObj, ...data];

          //3
          setData(newData);
        }}
      >
        1 列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' };

          //1 //2
          const newData = [...data, newObj];

          //3
          setData(newData);
        }}
      >
        2 列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 先寫出要新增的物件值
          // 1. uuid/nanoid 函式庫來產生不重覆的id值
          const newId1 = self.crypto.randomUUID();
          // 2. 用時間日期物件轉為毫秒整數 +號強制轉為數字
          const newId2 = +new Date();
          // 3. 一般得隨機數字串
          const newId3 = Math.floor(Math.random() * 1000000000);
          // 4. 模仿資料庫遞增ID的作法(ID需要有規則和都是數字才可以)
          const ids = data.map((v) => v.id); // 取出所有ID為陣列
          const newId4 = Math.max(...ids) + 1; // 得到陣列中最大值 之後+1

          const newObj = { id: newId4, text: 'xxx' };

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const newData = [newObj, ...data];

          //3
          setData(newData);
        }}
      >
        3 列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          const newId1 = self.crypto.randomUUID();
          const newId2 = +new Date();
          const newId3 = Math.floor(Math.random() * 1000000000);
          const ids = data.map((v) => v.id);
          const newId4 = Math.max(...ids) + 1;

          const newObj = { id: newId4, text: 'xxx' };

          setData([...data, newObj]);
        }}
      >
        4 列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 2
          const newData = data.filter((v, i) => v.text.includes('a'));

          // 3
          setData(newData);
        }}
      >
        5 尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      <button
        onClick={() => {
          //1 2
          // delete text 'b' object = return a new state array without 'b'
          const newData = data.filter((v, i) => v.text !== 'b');

          // 3
          setData(newData);
        }}
      >
        6 刪除文字為b的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 在陣列中刪除ID為4的物件 = 回傳一個新的陣列，不包含ID為4的物件
          const newData = data.filter((v, i) => {
            return v.id !== 4;
          });
        }}
      >
        7 刪除id為4的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 尋找ID為2的物件的索引值
          const foundIndex = data.findIndex((v) => v.id === 2);

          // 如果沒有找到會回傳-1 所以判斷是否大於-1
          if (foundIndex > -1) {
            // 建立要插入的新物件
            const newObj = { id: 5, text: 'bbb' };

            //分割陣列為兩個子陣列 `array slice(開始索引 , 結束索引)` 注意不包含結束索引的值
            const aa = data.slice(0, foundIndex + 1);
            const ab = data.slice(foundIndex + 1);

            //加上要插入的物件後 合併陣列
            const newData = [...aa, newObj, ...ab];

            setData(newData);
          }
        }}
      >
        8 在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          // 利用深拷貝的方式來複製一個新的陣列 就可以隨便處理了 缺點資料可能會遺失
          const deepCloneData = JSON.parse(JSON.stringify(data));
          // 找到ID為3的物件的索引值
          const foundIndex = deepCloneData.findIndex((v) => v.id === 3);
          // 如果有找到
          if (foundIndex > -1) {
            //  直接改值
            deepCloneData[foundIndex].text = 'cccc';

            setData(deepCloneData);
          }

          // 方法二
          // const newData = data.map((v, i) => {
          //   if (v.id === 3) return { ...v, text: 'cccc' };
          //   else return { ...v };
          // });

          // setData(newData);
        }}
      >
        9 取代id為3的文字為cccc
      </button>
    </>
  );
}
