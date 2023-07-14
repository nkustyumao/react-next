import React, { useState } from 'react';

export default function Menu() {
  const [activeItem, setActiveItem] = useState('');

  const items = ['首頁', '關於我們', '產品'];

  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={activeItem === item ? 'active' : ''}>
            <a
              href="#"
              onClick={() => {
                setActiveItem(item);
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
