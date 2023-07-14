import { useState } from 'react';

export default function StarRating() {
  // record the rating 0~5
  const [rating, setRating] = useState(0);

  return (
    <>
      <h1>星星評分</h1>
      {/* fill就是填充的意思 */}
      {Array(5)
        .fill(1)
        .map((v, i) => {
          // 每個星星的分數
          const socre = i + 1;
          return (
            <button
              key={i}
              className={i < rating ? 'on' : 'off'}
              onClick={() => {
                setRating(socre);
              }}
            >
              &#9733;
            </button>
          );
        })}
      <strong>你選了{rating}分</strong>
      <style jsx>
        {`
          button {
            background: transparent;
            border: none;
            outline: none;
            cursor: pointer;
          }
          .on {
            color: gold;
          }
          .off {
            color: gray;
          }
        `}
      </style>
    </>
  );
}
