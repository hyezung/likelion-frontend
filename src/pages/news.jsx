import React from 'react';
import NewsItem from '../components/NewsItem';
import MaintitleTab from '../components/MainTitle';
import './news.css';

// 뉴스 항목을 위한 데이터 배열
const newsItems = [
  {
    id: 1,
    channel: '로보뉴스',
    title: '[리포트 브리핑] 삼성전자, ‘기회가 왔다’ 목표가 94,000원',
    content: '[서울 = 뉴스핌]  로보뉴스 = 한국 투자 증권에서 03일 삼성 전자에 대해  ‘기회가 왔다’라며 투자의견 매수(유지)의 신규 리포트를 발행하였고, 목표가 94,000원으로 내놓았다...',
    imageUrl: "/image.png"
  },

  {
    id: 1,
    channel: '로보뉴스',
    title: '[리포트 브리핑] 삼성전자, ‘기회가 왔다’ 목표가 94,000원',
    content: '[서울 = 뉴스핌]  로보뉴스 = 한국 투자 증권에서 03일 삼성 전자에 대해  ‘기회가 왔다’라며 투자의견 매수(유지)의 신규 리포트를 발행하였고, 목표가 94,000원으로 내놓았다...',
    imageUrl: "/image.png"
  },

  {
    id: 1,
    channel: '로보뉴스',
    title: '[리포트 브리핑] 삼성전자, ‘기회가 왔다’ 목표가 94,000원',
    content: '[서울 = 뉴스핌]  로보뉴스 = 한국 투자 증권에서 03일 삼성 전자에 대해  ‘기회가 왔다’라며 투자의견 매수(유지)의 신규 리포트를 발행하였고, 목표가 94,000원으로 내놓았다...',
    imageUrl: "/image.png"
  }
];



// 뉴스 목록 컴포넌트
const NewsList = () => {
    const text = "전체뉴스";
    return (
     <>
     <div className='newspage'>
    <MaintitleTab maintitle={text} />
  <div className="news-list">
    {newsItems.map(item => (
        <div key={item.id}>
      <NewsItem
        key={item.id}
        channel={item.channel}
        title={item.title}
        content={item.content}
        imageUrl={item.imageUrl}
      />
      </div>
    ))}
  </div>
  </div>
  </>
);
};

export default NewsList;
