import styled from "styled-components";

const FooterWrapper = styled.footer`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 60%;
 height: 200px;
 background-color: #000;
 color: #fff;
 margin: 0 auto;
`;

const Logo = styled.h3`
 font-size: 2rem;
 margin-right: 20px;
`;

const ContactInfo = styled.div`
 display: flex;
 flex-direction: column;
`;

const EmailLink = styled.a`
 color: #fff;
 text-decoration: none;
 &:hover {
   text-decoration: underline;
 }
`;

const Address = styled.h2`
 margin-left: 20px;
 font-size: 1.2rem;
`;
function Lower() {
  return (
    <FooterWrapper>
   <Logo > @mindstride </Logo>
   <ContactInfo>
     <h2>Contact Us</h2>
     <EmailLink href="mailto:debankanmitra505@gmail.com">dev@gmail.com</EmailLink>
   </ContactInfo>
   <Address>193 New Barrackpur<br/>Kolkata, India</Address>
 </FooterWrapper>
  );
}

export default Lower;
