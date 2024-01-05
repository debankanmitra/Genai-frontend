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
  return (
    <Wrapper>
      <div>interface</div>
      <div className="inputarea">
        <span className="innerarea">
          <input
            className="common"
            type="text"
            placeholder="Talk to your Personal Development Coach"
            name=""
            id=""
          />
          <button type="submit" className="common">
            Send
          </button>
        </span>
      </div>
    </Wrapper>
  );
}

export default Interface;
