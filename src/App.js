import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {

  let post = '역삼 우동 맛집';
  let [글제목, b] =  useState('여자 코트 추천');
  let [제목, c] = useState('남성 운동화 추천');
  let [와앙, d] = useState('남녀공용 나이키');

  return ( 
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{ 글제목 }</h4>
        <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4>{ 제목 }</h4>
          <p>3월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 와앙 }</h4>
        <p>4월 24일 발행</p>
      </div>
      </div>
  );
}

export default App;
