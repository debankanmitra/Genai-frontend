/* eslint-disable react/no-unknown-property */
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Blob from "./blob";
import { Canvas } from "@react-three/fiber";

const Wrapper = styled.section`
  width: 85%;
  margin: 0 auto;
  /* border: 1px solid red; */
  transform: translate(0%, 50%);
  display: flex;
  justify-content: space-between;
  .headline {
    /* border: 1px solid green; */
    width: 50%;
    padding-top: 3rem;
    h1 {
      font-size: 3.4em;
      font-weight: 700;
      line-height: 1em;
      text-align: left;
    }
    h4 {
      font-size: 1.5em;
      font-style: italic;
    }
  }
  .canvas-div {
    /* background-color: rgb(240, 248, 255); */
    /* border: 1px solid white; */
    width: 40%;
  }
  button {
    width: 200px;
    padding: 15px 0;
    background: #ffffff;
    border: 1px solid #ffffff;
    color: #010203ff;
    cursor: pointer;
    overflow: hidden;
    font-size: 18px;
    margin-top: 2rem;
    border-radius: 30px;
    &:hover {
      background: #e6e0e0;
      border: 1px solid #e6e0e0;
    }
  }
`;

function Landingpg() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/chat");
  };
  return (
    <Wrapper className="wrapper">
      <div className="headline">
        <h1>
          Personal Development with AI Assistance, Conversational AI Bots for
          Personal Development
        </h1>
        <br />
        <h4>
          <strong>
            Your Trusted Partner in Personal Development with futuristic AI. Our
            tools help level the playing field, giving power to the people.
          </strong>
        </h4>
        <button type="button" onClick={handleClick}>
          Lets Chat
        </button>
      </div>

      <div className="canvas-div">
        <Canvas
          className="canvas"
          style={{
            width: "400px",
            height: "350px",
            backgroundColor: "transparent",
          }}
          camera={{ position: [10, 10, 10], fov: 70 }}
        >
          <Blob />
        </Canvas>
      </div>
    </Wrapper>
  );
}

export default Landingpg;
