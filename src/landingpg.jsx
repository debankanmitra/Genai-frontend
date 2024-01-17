/* eslint-disable react/no-unknown-property */
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Blob from "./blob";
import { Canvas } from "@react-three/fiber";

const Wrapper = styled.section`
  border: 1px solid red;
  transform: translate(0%, 60%);
  .canvas {
    margin-top: 5rem;
    background-color: rgb(240, 248, 255);
    width: 500px;
    height: 400px;
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
        <Canvas className="canvas" style={{ width: "500px", height: "400px", backgroundColor: "rgb(240, 248, 255)" }}  width="500px" height="400px"  camera={{ position: [10, 10, 10], fov: 70 }}>
          <Blob />
        </Canvas>
   </Wrapper>
  );
}

export default Landingpg;
