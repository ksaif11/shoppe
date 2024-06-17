import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #282c34;
  padding: 20px;
  text-align: center;
  color: white;
  overflow-x:hidden;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 Your Company. All Rights Reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
