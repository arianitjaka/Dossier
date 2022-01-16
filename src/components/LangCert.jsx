import React from "react";
import styled from "styled-components";
import Alb from "../assets/Alb";
import Usa from "../assets/Usa";

import Contact from "./Contact";

const Container = styled.div`
  display: flex;
  width: 90%;
  margin: auto;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const Lang = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 20px;
  padding: 20px;
  border-radius: 30px;
  background-color: #26262b;
  text-align: center;

  h1 {
    font-size: 3em;
    margin: 0;
    margin-bottom: 40px;
    background-color: #ffffff;
    background-image: linear-gradient(
      43deg,
      #ffffff 0%,
      #6284ff 50%,
      #ff0000 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h3 {
    color: #a6a6a6;
    text-align: left;
  }
  svg {
    width: 20%;
    margin-right: 20px;
    border-radius: 15px;
  }

  @media screen and (max-width: 900px) {
    width: auto;
  }
  @media screen and (max-width: 800px) {
    h1 {
      font-size: 2.5em;
    }
  }
  @media screen and (max-width: 380px) {
    svg {
      width: 50%;
    }
    h1 {
      font-size: 2em;
    }
    h3 {
      font-size: 16px;
    }
  }
`;

export default function LangCert() {
  return (
    <Container>
      <Lang>
        <h1>Languages</h1>
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 40 }}
        >
          <Alb />
          <h3>Native</h3>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Usa />
          <h3>Full Pro</h3>
        </div>
      </Lang>

      <Contact />

      {/* <Cert>
        <h1>Certificates</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <img src={Odk} alt="ODK" />
          <img src={Probit} alt="Probit" />
          <img src={Udemy} alt="Udemy" />
          <img src={Ick} alt="ICK" />
        </div>
      </Cert> */}
    </Container>
  );
}
