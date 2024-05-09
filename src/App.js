import "./App.css";
import React from "react";
import MyButton from "./MyButton";
import Login from "./Login";
import NewsList from "./NewsList";
import BookList from "./BookList";
import TitleTab from "./Title";

function App() {
  const name = "윤혜정";
  const buttonText = "버튼";
  const channel = "로보뉴스";
  const title = "[리포트 브리핑] 삼성전자, ‘기회가 왔다’ 목표가 94,000원 ";
  const content = `[서울 = 뉴스핌]  로보뉴스 = 한국 투자 증권에서 03일 삼성 전자에 대해  ‘기회가 왔다’라며
  투자의견 매수(유지)의 신규 리포트를 발행하였고, 목표가 94,000원으로 내놓았다...`;
  const imageUrl = "/image.png";
  const title2 = "주식 기본 용어, 알고 시작하자!";
  const svgImage = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        d="M25.8246 22.7935L32.3664 11.4784V28.2857V31.1612H3.61145V5.28173H6.48694V23.3111L14.3946 9.59497L23.7399 15.0297L29.836 4.49097L32.3233 5.92871L24.8038 18.9403L15.4441 13.5488L6.93265 28.2857H10.182L16.4937 17.4163L25.8246 22.7935Z"
        fill="#71B3E4"
      />
    </svg>
  );
  const maintitle = "제목";
  const subtitle = "부제목";

  return (
    <div>
      <Login name={name} />
      <MyButton text={buttonText} />
      <hr></hr>
      <NewsList
        channel={channel}
        title={title}
        content={content}
        imageUrl={imageUrl}
      />
      <BookList title2={title2} svg={svgImage} />
      <TitleTab maintitle={maintitle} subtitle={subtitle} />
    </div>
  );
}

export default App;
