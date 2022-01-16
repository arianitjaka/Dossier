import React from "react";
import styled from "styled-components";
import Handikos from "../assets/handikos.png";
import KosOut from "../assets/kosovaout.png";
import Tetbit from "../assets/tetbit.png";
import SkillsIcons from "../assets/skills.png";

const Container = styled.div`
  display: flex;
  width: 90%;
  margin: auto;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const WorkExp = styled.div`
  width: 50%;
  margin: 20px;
  border-radius: 30px;
  background-color: #26262b;

  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  margin: 20px;
  background-color: #a9c9ff;
  background-image: linear-gradient(43deg, #a9c9ff 0%, #ffbbec 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 992px) {
    font-size: 2.5em;
  }
  @media screen and (max-width: 450px) {
    font-size: 2em;
  }
`;

const Skills = styled.div`
  width: 50%;
  margin: 20px;
  border-radius: 30px;
  background-color: #26262b;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }
  h1 {
    text-align: center;
    font-size: 3em;
    margin-top: 0;
    background-color: #52acff;
    background-image: linear-gradient(43deg, #52acff 30%, #ffe32c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 768px) {
    width: auto;
  }
  @media screen and (max-width: 450px) {
    h1 {
      font-size: 2.5em;
    }
  }
`;

const Companies = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Company = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  margin: auto;

  img {
    width: 20%;
    height: auto;
    margin: auto;
    padding-top: 40px;
  }

  p {
    color: #a6a6a6;
  }

  @media screen and (max-width: 992px) {
    img {
      width: 25%;
    }
    #handikosImg {
      padding-top: 0;
    }
  }
  @media screen and (max-width: 450px) {
    img {
      width: 30%;
    }
  }
`;

export default function WorkSkills() {
  return (
    <Container>
      <WorkExp>
        <Title>Work experience</Title>
        <Companies>
          <Company>
            <img src={Handikos} alt="" id="handikosImg" />
          </Company>
          <Company>
            <img src={KosOut} alt="" />
          </Company>
          <Company>
            <img src={Tetbit} alt="" />
          </Company>
        </Companies>
      </WorkExp>
      <Skills>
        <img src={SkillsIcons} alt="" />
        <h1>Skills</h1>
      </Skills>
    </Container>
  );
}
