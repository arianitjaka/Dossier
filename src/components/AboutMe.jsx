import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* display: flex;
  align-items: center; */
  padding-bottom: 50px;
  width: auto;
  margin: auto;
  /* border: 1px solid red; */
  margin-top: -25px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: #1d1d1f;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const AboutMeContent = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: auto;
  padding-top: 100px;
  /* padding-top: 500px; */
  /* border: 1px solid green; */

  @media screen and (max-width: 992px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Shade = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  margin: auto;
  /* padding-top: 50px; */
  /* border: 1px solid blue; */
  /* border-top-left-radius: 30px; */

  @media screen and (max-width: 992px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const YearsExp = styled.div`
  text-align: center;
  padding: 15px 30px;
  border-radius: 30px;
  background-color: #26262b;
  width: 50%;
  margin: 20px;

  h1 {
    margin: 0;
    background-color: #4158d0;
    background-image: linear-gradient(
      43deg,
      #4158d0 0%,
      #c850c0 46%,
      #ffcc70 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    span {
      font-size: 3em;

      @media screen and (max-width: 800px) {
        font-size: 2em;
      }
    }
  }

  p {
    margin: 0;
    color: #a6a6a6;
  }

  @media screen and (max-width: 800px) {
    margin-right: 10px;
  }
  @media screen and (max-width: 500px) {
    margin: 10px 20px;
    width: -webkit-fill-available;
  }
`;

const Passion = styled.div`
  text-align: center;
  padding: 15px 30px;
  border-radius: 30px;
  background-color: #26262b;
  width: 50%;
  margin: 20px;

  h1 {
    margin: 0;
    background-color: #ff3cac;
    background-image: linear-gradient(
      225deg,
      #ff3cac 0%,
      #784ba0 50%,
      #2b86c5 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    span {
      font-size: 3em;

      @media screen and (max-width: 800px) {
        font-size: 2em;
      }
    }
  }

  p {
    margin: 0;
    color: #a6a6a6;
  }

  @media screen and (max-width: 800px) {
    margin-left: 10px;
  }
  @media screen and (max-width: 500px) {
    margin: 10px 20px;
    width: -webkit-fill-available;
  }
`;

export default function AboutMe() {
  return (
    <Container>
      <Shade>
        <AboutMeContent>
          <YearsExp>
            <h1>
              <span>3</span> years
            </h1>
            <p>Experience</p>
          </YearsExp>

          <Passion>
            <h1>
              <span>100</span> %
            </h1>
            <p>Passion</p>
          </Passion>
        </AboutMeContent>
      </Shade>
    </Container>
  );
}
