import React from 'react';
import styled from '@emotion/styled';
const FooterContainer = styled.div`
  
    width: 100%;
    background-color: #333;
    opacity: 0.8;
    color: white;
    text-align: center;
    padding: 10px 0;
    `;
const Footer = () => {
  return (
    <FooterContainer>
      <p>musicApp © 2023</p>
    </FooterContainer>
    );
};

export default Footer;



