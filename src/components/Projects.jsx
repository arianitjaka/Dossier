import React from "react";
import styled from "styled-components";
import Imac from "../assets/iMac.svg";
import Amici from "../assets/Amici.svg";
import GithubIcon from "../assets/GithubIcon";
import LinkIcon from "../assets/LinkIcon";
import TTS from "../assets/TTS.svg";
import Uni from "../assets/Uni.svg";
import Citizen from "../assets/Citizen.svg";
import HostRank from "../assets/HostRank.svg";
import Dossier from "../assets/Dosier.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  margin-top: 50px;
  padding-bottom: 50px;

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

const HeroProjects = styled.div`
  background-color: #ff3cac;
  background-image: linear-gradient(
    225deg,
    #ff3cac 0%,
    #784ba0 50%,
    #2b86c5 100%
  );
  padding: 50px 50px 25px;
  margin: 20px;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  align-items: center;

  img {
    width: 40%;
    margin: auto;
    padding-left: 50px;
  }

  @media screen and (max-width: 600px) {
    padding: 25px;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    img {
      width: 80%;
      padding-left: 0;
    }
    h1 {
      font-size: 1.5em;
    }
  }
`;

const MyProjects = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Project = styled.div`
  width: 50%;
  margin: 20px;
  display: flex;
  align-items: center;
  padding: 30px;
  border-radius: 30px;
  background-color: #26262b;

  h1 {
    margin-top: 0;
    margin-right: 10px;
    font-size: 1.5em;
  }

  img {
    width: 100%;
    margin: auto;
  }

  a {
    color: #a6a6a6;

    &:hover {
      color: #fff;
    }
  }

  @media screen and (max-width: 768px) {
    width: auto;
    margin: 10px 20px;
  }
  @media screen and (max-width: 450px) {
    padding-right: 0;
    padding-left: 20px;
    flex-direction: column;
    overflow: hidden;
    img {
      width: 200%;
      margin-top: 20px;
    }
  }
`;

export default function Projects() {
  return (
    <Container>
      <Title>A collection of my projects</Title>

      <HeroProjects>
        <h1>Responsive on all devices.</h1>
        <img src={Imac} alt="" />
      </HeroProjects>

      <MyProjects>
        <Project>
          <div style={{ width: "100%" }}>
            <h1>Amici</h1>

            <a href="http://amici.epizy.com/">
              <LinkIcon style={{ marginRight: 25 }} />
            </a>
          </div>
          <div style={{ width: "60%" }}>
            <img src={Amici} alt="" />
          </div>
        </Project>
        <Project>
          <div style={{ width: "100%" }}>
            <h1>Tap to Sound</h1>
            <a href="https://github.com/arianitjaka/Tap-to-Sound">
              <GithubIcon />
            </a>
          </div>
          <div style={{ width: "60%" }}>
            <img src={TTS} alt="" />
          </div>
        </Project>
      </MyProjects>

      <MyProjects>
        <Project>
          <div style={{ width: "100%" }}>
            <h1>Uniworks</h1>
            <a href="https://github.com/arianitjaka/uniworks">
              <GithubIcon />
            </a>
          </div>
          <div style={{ width: "60%" }}>
            <img src={Uni} alt="" />
          </div>
        </Project>
        <Project>
          <div style={{ width: "100%" }}>
            <h1>Citizenshipway</h1>
            <a href="https://citizenshipway.netlify.app/">
              <LinkIcon style={{ marginRight: 25 }} />
            </a>
            <a href="https://github.com/arianitjaka/Citizenshipway">
              <GithubIcon />
            </a>
          </div>
          <div style={{ width: "60%" }}>
            <img src={Citizen} alt="" />
          </div>
        </Project>
      </MyProjects>

      <MyProjects>
        <Project>
          <div style={{ width: "100%" }}>
            <h1>HostRank</h1>
            <a href="https://hostrank.netlify.app/">
              <LinkIcon style={{ marginRight: 25 }} />
            </a>
            <a href="https://github.com/arianitjaka/HostRank">
              <GithubIcon />
            </a>
          </div>
          <div style={{ width: "60%" }}>
            <img src={HostRank} alt="" />
          </div>
        </Project>
        <Project>
          <div style={{ width: "100%" }}>
            <h1>Dossier</h1>
            <GithubIcon />
          </div>
          <div style={{ width: "60%" }}>
            <img src={Dossier} alt="" />
          </div>
        </Project>
      </MyProjects>
    </Container>
  );
}
