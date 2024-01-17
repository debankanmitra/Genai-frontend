import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  div {
    width: 90%;
    height: 75vh;
    /* border: 1px solid red; */
    overflow-y: scroll;
    padding: 1.25rem 5rem 0rem 5rem;
    box-sizing: border-box;
    margin: 0% auto;
    border-radius: 25px 25px 0px 0px;
    background-color: rgba(30, 31, 32, 1);
    &::-webkit-scrollbar {
      display: none;
    }
    center {
      margin: 0 0 3rem 0;
      text-decoration: underline;
    }
    li {
      list-style-type: none;
      display: flex;
      font-size: 1.2em;
      letter-spacing: 0.7px;
    }
    .user {
      margin-bottom: 1rem;
    }
    .bot {
      margin-bottom: 3rem;
    }  
    .user>span {
        border: 1px solid rgba(87, 90, 123, 1);
        padding: 2px 10px 4px 10px;
        border-radius: 15px;
        margin-right: 1.5rem;
        background-color: rgba(87, 90, 123, 1);
    }
    .bot>span {
        border: 1px solid rgba(102, 88, 234, 1);
        padding: 2px 10px 4px 10px;
        border-radius: 0px 15px 15px 15px;
        margin-right: 1rem;
        background-color: rgba(102, 88, 234, 1);
        height: fit-content;
      }
  }
  .inputarea {
    /* border: 1px solid aliceblue; */
    width: 90%;
    height: 10vh;
    border-radius: 0px 0px 25px 25px;
    padding: 0px;
    display: grid;
    place-items: center;
  }
  .innerarea {
    display: flex;
    width: 70%;
    /* border: 1px solid blue; */
    .common {
      padding: 10px;
      border-radius: 20px;
      border: 2px solid rgba(106, 90, 219, 1);
      background-color: rgba(30, 31, 32, 1);
      cursor: pointer;
    }
    input {
      width: 90%;
      margin-right: 10px;
      /* border-image: linear-gradient(to right, #ff8a00, #e52e71); */
    }
    button {
      width: 20%;
      margin-left: 10px;
      transition-duration: 0.4s;
    }
    button:hover {
      /* color: black; */
      background-image: linear-gradient(90deg, #ff8a00, #e52e71);
      border: 2px solid aliceblue;
    }
    
  }
`;

function Interface() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages((prevMessages) => [...prevMessages, inputValue]);
    const response = await fetch("http://127.0.0.1:8000/events", {
      method: "POST",
      body: JSON.stringify(inputValue),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setInputValue("");
    const result = await response.json();
    setMessages((prevMessages) => [...prevMessages, result.answer]);
    console.log(inputValue);
  };
  return (
    <Wrapper>
      <div className="screen">
        <center style={{ fontSize: "1.5em" }}>
          {" "}
          Hello! Ask me a question to get started. I am your personal
          development coach.{" "}
        </center>
        {messages?.map((message, index) =>
          index % 2 == 0 ? (
            <li key={index} className="user">
            <span>user</span>
            <p>  {message}  </p>
            </li>
          ) : (
            <li key={index} className="bot">
            <span>coach</span>
            <p>  {message}  </p>
            </li>
          )
        )}
      </div>
      <div className="inputarea">
        <form className="innerarea" onSubmit={handleSubmit}>
          <input
            className="common"
            type="text"
            value={inputValue}
            placeholder="Talk to your Personal Development Coach"
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(event) => event.key === "Enter" && handleSubmit(event)}
          />
          <button type="submit" className="common">
            Send
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

export default Interface;
