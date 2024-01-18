import styled from "styled-components";

const FooterWrapper = styled.footer`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 200px;
 background-color: #000;
 color: #fff;
`;

const Logo = styled.img`
 width: 100px;
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
function Lower() {
  return (
    <FooterWrapper>
   <Logo src="/path/to/your/logo.png" alt="Your Logo" />
   <ContactInfo>
     <h2>Contact Us</h2>
     <EmailLink href="mailto:dev@gmail.com">dev@gmail.com</EmailLink>
   </ContactInfo>
 </FooterWrapper>
  );
}

export default Lower;
