import React from "react";
import styled from "styled-components";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiNavigation } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 5em;
  text-align: left;
  margin: 20px;
`;

const Contacts = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: auto;
  }
`;

const ContactInfo = styled.div`
  width: 100%;
  margin: 20px;
  border-radius: 30px;
  background-color: #26262b;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  svg {
    width: 60px;
    height: auto;
    color: #99bde0;
  }

  h1 {
    font-size: 16px;
    margin-top: 25px;
    color: #a6a6a6;
  }

  @media screen and (max-width: 992px) {
    svg {
      width: 40px;
    }
  }
  @media screen and (max-width: 600px) {
    width: auto;
  }
  @media screen and (max-width: 450px) {
    margin: 10px 20px;
    h1 {
      font-size: 14px;
    }
  }
`;

export default function Contact() {
  return (
    <Container>
      {/* <Title>Let`s get in touch</Title> */}

      <Contacts>
        <ContactInfo>
          <FiMail />
          <h1>arianitjaka@hotmail.com</h1>
        </ContactInfo>
        <ContactInfo>
          <FiPhone />
          <h1>+383 49 / 231 - 380</h1>
        </ContactInfo>
      </Contacts>
      <Contacts>
        <ContactInfo>
          <FiNavigation />
          <h1>Gjakovë</h1>
        </ContactInfo>
        <ContactInfo>
          <FiGithub />
          <h1>/arianitjaka</h1>
        </ContactInfo>
      </Contacts>
    </Container>
  );
}
