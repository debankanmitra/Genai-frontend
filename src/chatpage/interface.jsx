import styled from "styled-components";

const Wrapper = styled.section`
  div {
    width: 90%;
    height: 73vh;
    /* border: 1px solid red; */
    margin: 0% auto;
    border-radius: 25px 25px 0px 0px;
    background-color: rgba(30, 31, 32, 1);
  }
  .inputarea {
    margin-top: 0px;
    width: 90%;
    height: 10vh;
    border: 1px solid #c8dcf0;
    border-radius: 0px 0px 25px 25px;
    display: grid;
    place-items: center;
  }
  .innerarea{
      display: flex;
      border: 1px solid blue;
      width: 70%;
      input{
          width: 90%;        
          margin-right: 10px;  
      }
      button{
          width: 20%;
          margin-left: 10px;
      }
      .common{
        padding: 10px;
        border-radius: 20px;
        border: 2px solid rgba(106, 90,219, 1);
        background-color: rgba(30, 31, 32, 1);
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
      <button className="common">Send</button>
      </span>
      </div>
    </Wrapper>
  );
}

export default Interface;
