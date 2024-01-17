import styled from "styled-components";
// import { device } from './device';

const Wrapper = styled.section`
  width: 100%;
  position: fixed;
  background-color: #000;
  z-index: 1000;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.8rem 5% 1.8rem 5%;
    span {
      font-size: 2.5rem;
      padding: 0% 2% 0% 2%;
    }
    .large {
      display: flex;
      gap: 1.5rem;
      li {
        font-size: 1.3rem;
        list-style-type: none;
        border-radius: 5px;
        padding: 5px 15px 8px 15px;
        border: 1px solid transparent;
        color: #ffffff;
      }
      li:hover {
        color: #00e878;
        cursor: pointer;
        border: 1px solid #00e878;
      }
    }
    .icon {
      display: none;
      transform: rotate(90deg);
      cursor: pointer;
      font-size: 2rem;
      letter-spacing: 2px;
    }
    .large-btn {
      /* display: none; */
      font-size: 1rem;
      font-weight: 600;
      padding: 0.8rem 1rem 0.8rem 1rem;
      border-radius: 5px;
      border: none;
      color: #000;
      background: #fff;
    }
  }
  .small {
    display: none;
    background-color: #000;
    li {
      list-style-type: none;
      border-bottom: 1px solid #2c2c33;
      font-size: 1.5rem;
      padding: 1rem 3rem 1rem 3rem;
      cursor: pointer;
      font-weight: 600;
    }
    li:hover {
      color: #00e878;
    }
  }
  .btn {
    display: none;
    transform: translate(15%);
    width: 80%;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.8rem 1rem 0.8rem 1rem;
    border-radius: 5px;
    border: none;
    color: #000;
    background: #fff;
  }

  @media (max-width: 768px) {
    header {
      .large {
        display: none;
      }
      .large-btn {
        display: none;
      }
      .icon {
        display: block;
      }
    }
    .small {
      display: block;
    }
    .btn {
      display: block;
    }
  }
`;

function Header() {
  const handlefunc = () => {
    const x = document.querySelector(".small");
    const y = document.querySelector(".btn");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "none";
    } else {
      x.style.display = "block";
      y.style.display = "block";
    }
  }
  return (
    <Wrapper>
      <header>
        <span className="logo">mindstride</span>
        <nav className="large">
          <li href="https://example.com">About</li>
          <li href="https://example.com">Product</li>
          <li href="https://example.com">Contact</li>
        </nav>
        <span className="icon" onClick={handlefunc}>|||</span>
        <button className="large-btn">Try It Free</button>
      </header>
      <br />
      <nav className="small">
        <li href="https://example.com">About</li>
        <li href="https://example.com">Product</li>
        <li href="https://example.com">Contact</li>
        <li href="https://example.com">Try It Free</li>
      </nav>
      <br />
      <button type="submit" className="btn">
        Try It Free
      </button>
    </Wrapper>
  );
}

export default Header;
