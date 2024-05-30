import React from 'react';
import BookItem from '../components/BookItem';
import MaintitleTab from '../components/MainTitle';

import './textbook.css';

const bookItems = [
  {
    id: 1,
    title: '기업 실적 분석에 쓰이는 재무재표에 알아볼까요?',
    imageUrl: "/card-bulleted-settings.png",
    backgroundColor: "#FFEBC5"
  },

  {
    id: 2,
    title: '주요 지수, 코스피 코스닥이란?',
    imageUrl: "/chess-queen.png",
    backgroundColor: "rgba(133, 214, 209, 1)" 
  },

  {
    id: 3,
    title: '주식 기본 용어 알고 시작하자!',
    imageUrl: "/chart-areaspline.png",
    backgroundColor: "rgba(209, 226, 239, 1)"
  }
];

//교과서 목록 컴포넌트
const TextbookList = () => {
  const text = "교과서";
  return (
   <>
   <div className='textbookpage'>
  <MaintitleTab maintitle={text} />
<div className="book-list">
  {bookItems.map(item => (
      <div key={item.id}>
    <BookItem
      key={item.id}
      channel={item.channel}
      title={item.title}
      content={item.content}
      backgroundColor={item.backgroundColor}
      imageUrl={item.imageUrl}
    />
    </div>
  ))}
</div>
</div>
</>
);
};

export default TextbookList;