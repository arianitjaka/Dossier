import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 4em;
  text-align: left;
  margin: 20px;

  @media screen and (max-width: 600px) {
    font-size: 3em;
  }
  @media screen and (max-width: 380px) {
    font-size: 2.5em;
  }
`;

const EduContainer = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Uni = styled.div`
  margin: 20px;
  width: 50%;
  padding: 20px;
  border-radius: 30px;
  background-color: #26262b;

  h1 {
    margin: 0;
    font-size: 3em;
    background-color: #ff9a8b;
    background-image: linear-gradient(
      43deg,
      #ff9a8b 0%,
      #ff6a88 55%,
      #ff99ac 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h3 {
    color: #a6a6a6;
    margin: 15px 0;
  }

  @media screen and (max-width: 800px) {
    margin-right: 10px;
    h1 {
      font-size: 2.5em;
    }
    h3 {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 600px) {
    width: auto;
    margin: 20px;
  }
  @media screen and (max-width: 450px) {
    width: auto;
    margin: 10px 20px;
    h1 {
      font-size: 2em;
    }
    h3 {
      font-size: 14px;
    }
  }
`;

const HighSchool = styled.div`
  margin: 20px;
  width: 50%;
  padding: 20px;
  border-radius: 30px;
  background-color: #26262b;

  h1 {
    margin: 0;
    font-size: 3em;
    background-color: #21d4fd;
    background-image: linear-gradient(43deg, #21d4fd 0%, #b721ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h3 {
    color: #a6a6a6;
    margin: 15px 0;
  }

  @media screen and (max-width: 800px) {
    margin-left: 10px;
    h1 {
      font-size: 2.5em;
    }
    h3 {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 600px) {
    width: auto;
    margin: 20px;
  }

  @media screen and (max-width: 450px) {
    width: auto;
    margin: 10px 20px;
    h1 {
      font-size: 2em;
    }
    h3 {
      font-size: 14px;
    }
  }
`;

export default function Education() {
  return (
    <Container>
      <Title>Some info about me</Title>
      <EduContainer>
        <Uni>
          <p style={{ fontSize: 12, color: "#a6a6a6", marginBottom: 0 }}>
            10/2017 - 10/2020
          </p>
          <h1>University</h1>
          <h3>"Ukshin Hoti" in Prizren</h3>
          <h3>Information and Communication Technologies</h3>
          <h3>BSc of Computer Science</h3>
        </Uni>
        <HighSchool>
          <p style={{ fontSize: 12, color: "#a6a6a6", marginBottom: 0 }}>
            09/2014 - 05/2017
          </p>
          <h1>High School</h1>
          <h3>Gymnasium “Hajdar Dushi” in Gjakova</h3>
          <h3>Natural Sciences</h3>
          <h3>Diploma</h3>
        </HighSchool>
      </EduContainer>
    </Container>
  );
}
