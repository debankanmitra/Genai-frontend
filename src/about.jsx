// import { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import styled from "styled-components";

const Wrapper = styled.section`
  width: 80%;
  margin: 0 auto;
  height: 150vh;
  text-align: center;
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
    line-height: 1.5em;
    margin-top: 2rem;
    font-weight: 800;
  }
  .changing-text {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      font-size: 2rem;
    }
    .questions {
      width: 20%;
      height: 60px;
      background-color: #fff;
      border: 1px solid #000;
      margin-left: 1rem;
      color: #000;
      padding: 0.5rem;
      border-radius: 15px;
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
    }
  }
`;

const questionsList = [
  "How can I improve my mental health?",
  "How to develop good habits?",
  "How to eliminate bad habits?",
  "How bad habits can affect me?",
];

function Middle() {
  const [text] = useTypewriter({
    words: questionsList,
    loop: 0,
  });
  return (
    <Wrapper>
      <h1>About</h1>
      <p>
        &ldquo;Mindstride&rdquo; could imply the idea of taking intentional
        steps or strides toward better mental health, personal growth, or
        self-improvement. The term &ldquo;Mind&rdquo; refers to the mental
        aspect, encompassing thoughts, emotions, and mindfulness.
        &ldquo;Stride&rdquo; typically denotes a purposeful, confident step or
        movement forward. Therefore, `MindStride` might signify a deliberate
        journey or progress in enhancing mental well-being, personal
        development, or self-discovery .
      </p>
      <div className="changing-text">
        <h3>Ask Questions like :</h3>
        <span className="questions">{text}</span>
        <Cursor cursorColor="black" />
      </div>
    </Wrapper>
  );
}

export default Middle;
