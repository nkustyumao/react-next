import { useState } from 'react';
import Image from 'next/image';

// 範例資料
import data from '@/data/books.json';

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg';
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg';

function BookList() {
  // 將導入的JSON資料 增加一個fav屬性 做為加入收藏判斷用
  const initState = data.map((v) => {
    return { ...v, fav: false };
  });

  // 初始化定義狀態
  const [books, setBooks] = useState(initState);

  // 改進 純粹化(purify)改為純函式(pure function)
  // 傳入state與ID
  // 返回一個已經切換好fav的布林值(true-> false false-> trun)
  const toggleFav = (state, isbn) => {
    return state.map((v) => {
      if (v.isbn === isbn) return { ...v, fav: !v.fav };
      else return { ...v };
    });
  };

  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {books.map((v, i) => {
            return (
              <tr key={v.isbn}>
                <td>{v.isbn}</td>
                <td>{v.title}</td>
                <td>{v.author}</td>
                <td>
                  <Image
                    src={v.fav ? bookmarkIconFill : bookmarkIcon}
                    alt=""
                    onClick={() => {
                      const newBooks = toggleFav(books, v.isbn);
                      setBooks(newBooks);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default BookList;
