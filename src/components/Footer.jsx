import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #111112;
  padding: 20px;
  text-align: center;
  margin-top: 50px;

  h4 {
    margin: auto;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <h4>Dossier &copy; 2022</h4>
    </FooterContainer>
  );
}
