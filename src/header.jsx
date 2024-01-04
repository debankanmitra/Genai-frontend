import { useState } from "react";
import styled from "styled-components";
import Nav from "./nav";

const Head = styled.section`
  padding: 1.3rem 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    font-size: 2.3rem;
    text-decoration: none;
  }
  .humbarger .bar {
    width: 25px;
    height: 2px;
    margin: 5px;
    background: #010302;
    display: none;
  }
  .humbarger {
    background: #ffffff;
    padding: 6px;
    border-radius: 5px;
    display: none;
  }
  @media only screen and (max-width: 767px) {
    .humbarger .bar {
      display: block;
    }
    .humbarger {
      display: block;
      cursor: pointer;
    }
  }
`;
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleNavbar = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Head>
      <span className="logo">Legal.AI</span>
      <Nav isOpen={menuOpen} />
      <br />
      <button className="humbarger" onClick={toggleNavbar}>
        <div className="bar"></div>
        <div className="bar2 bar"></div>
        <div className="bar"></div>
      </button>
    </Head>
  );
}

export default Header;
