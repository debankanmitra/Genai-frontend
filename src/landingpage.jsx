import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Blob from "./blob";
import { Canvas } from "@react-three/fiber";

const Wrapper = styled.section`
    border: 1px solid red;
    margin: 0 auto;
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #fdd804;
    transform: translate(0%, 50%);
    .headline {
      width: 50%;
      margin-right: 20px;
      border: 1px solid #0f30b4;
      h1 {
        border: 1px solid #04d326;
        font-size: 4em;
        line-height: 1em;
        text-align: left;
        color: #ffffff;
      }
      h4 {
        border: 1px solid #00ec20;
        font-size: 1.25em;
        /* margin-top: 0.5rem; */
        text-align: left;
        color: #ffffff;
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
    }
    img {
      border: 1px solid #00ec20;
      width: 30%;
      /* float: right; */
      margin-left: 20px;
    }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    #main .headline h1 {
      font-size: 5em;
    }
    #main img {
      width: 60%;
    }
  }
  @media only screen and (max-width: 767px) {
    #main .headline h1 {
      font-size: 4.4rem;
      align-items: center;
    }
    #main img {
      width: 45%;
      margin-top: 3rem;
    }
    #main {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;

function Landingpage() {
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
              Your Trusted Partner in Personal Development with futuristic AI.
              Our tools help level the playing field, giving power to the
              people.
            </strong>
          </h4>
          <button type="button" onClick={handleClick}>
            Lets Chat
          </button>
        </div>
        <Canvas className="canvas" camera={{ position: [0, 0, 10], fov: 60 }}>
          <Blob />
        </Canvas>
    </Wrapper>
  );
}

export default Landingpage;
