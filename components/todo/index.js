import { useState } from 'react';

const TodoIndex = () => {
  // 定義文字輸入用的狀態
  const [inputText, setInputText] = useState('');
  // 修正中文輸入法的BUG
  const [isCompositing, setIsCompositing] = useState(false);

  // 定義狀態
  // 每個成員 todo = {id,text}
  // 資料一定要有ID 因為KEY藥用ID才可以做新增、修改、刪除 這是react中map時需要的
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶' },
    { id: 2, text: '學react' },
  ]);

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onCompositionStart={() => {
          setIsCompositing(true);
        }}
        onCompositionEnd={() => {
          setIsCompositing(false);
        }}
        onKeyDown={(e) => {
          // 要在不是中文輸入法組字期間 按下enter才加入到代辦事項
          if (
            e.key === 'Enter' && // 按下enter
            !isCompositing && // 不是中文輸入法組字期間
            inputText.trim() !== '' // 避免輸入空白字元
          ) {
            const newTodo = { id: Number(new Date()), text: inputText };
            setTodos([newTodo, ...todos]);
            //清空文字輸入框
            setInputText('');
          } else {
            e.preventDefault(); // 加了就只能輸入中文
          }
        }}
      />
      <hr />
      <ul>
        {todos.map((v, i) => {
          return <li key={v.id}>{v.text}</li>;
        })}
      </ul>
    </>
  );
};

export default TodoIndex;
