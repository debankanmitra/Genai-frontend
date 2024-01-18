import { useState, useEffect } from "react";
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
  .carousel-div {
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 3px solid #fff; */
    .image {
      width: 25%;
      height: 60vh;
      background-image: url("https://mindstride-book-images.s3.amazonaws.com/book-${props => props.currentImageIndex}.jpg");
      background-size: cover;
      background-position: center;
      border: 3px solid #fff;
    }
    .carousel-texts {
      width: 50%;
      height: 60vh;
      /* border: 3px solid #fff; */
      text-align: left;
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [1, 2, 3, 4, 5, 6];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(timer); // Clear the timer when the component unmounts
  }, [currentImageIndex, images.length]);

  const [text] = useTypewriter({
    words: questionsList,
    loop: 0,
  });
  return (
    <Wrapper currentImageIndex={currentImageIndex}>
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

      <div className="carousel-div">
        <div className="image" alt="image"></div>
        <p className="carousel-texts">
          Our application leverages the wisdom contained within a vast array of
          books, including &ldquo;Think and Grow Rich&rdquo; and &ldquo;7 Habits
          of Highly Effective People,&rdquo; among others. Our AI system parses
          these books, extracting key insights and principles related to
          self-development and mental health. These insights are then translated
          into interactive, engaging conversations with users. We&apos;ve
          curated a library of over 70 such books, covering a wide range of
          topics from personal growth to mental health.
        </p>

      </div>
    </Wrapper>
  );
}

export default Middle;
