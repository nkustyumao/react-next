import ThemeContext from '@/context/theme';
import { useContext } from 'react';

const ChildA = () => {
  // 利用useContext得到context中的值
  const { color, setColor } = useContext(ThemeContext);
  return (
    <>
      <h1>ChildA</h1>
      <div style={{ color: color }}>Hello</div>
      <button
        onClick={() => {
          setColor('red');
        }}
      >
        red
      </button>
      <button
        onClick={() => {
          setColor('blue');
        }}
      >
        blue
      </button>
    </>
  );
};

export default ChildA;
