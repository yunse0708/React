import "./App.css";
import { useState } from "react";

function App() {
  let post = "역삼 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "여자 코트 추천",
    "남성 운동화 추천",
    "남여공용 나이키",
  ]);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목]; //...은 괄호를 벗겨주세요라는 문법
          copy[0] = "남자 코트 추천";
          글제목변경(copy);
        }}
      >
        글수정
      </button>

      <div className="list">
        <h4>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>3월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>4월 24일 발행</p>
      </div>
    </div>
  );
}

export default App;
