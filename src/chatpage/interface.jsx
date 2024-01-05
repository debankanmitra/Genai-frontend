import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  div {
    width: 90%;
    height: 75vh;
    /* border: 1px solid red; */
    padding: 20px 25px 0px 25px;
    box-sizing: border-box;
    margin: 0% auto;
    border-radius: 25px 25px 0px 0px;
    background-color: rgba(30, 31, 32, 1);
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
    input {
      width: 90%;
      margin-right: 10px;
    }
    button {
      width: 20%;
      margin-left: 10px;
    }
    .common {
      padding: 10px;
      border-radius: 20px;
      border: 2px solid rgba(106, 90, 219, 1);
      background-color: rgba(30, 31, 32, 1);
      cursor: pointer;
    }
  }
`;

function Interface() {
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/events', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log(result);
  };
  return (
    <Wrapper>
      <div>interface</div>
      <div className="inputarea">
        <form className="innerarea" onSubmit={handleSubmit}>
          <input
            className="common"
            type="text"
            placeholder="Talk to your Personal Development Coach"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            onKeyDown={(event) => event.key == "Enter" && handleSubmit()}
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
