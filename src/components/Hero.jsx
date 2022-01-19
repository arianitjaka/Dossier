import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: repeating-linear-gradient(
    43deg,
    #e66465 0%,
    #c850c0 46%,
    #9198e5 100%
  );
  background-size: 600vw;
  animation: slide 20s infinite alternate;

  @keyframes slide {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 6em;

  @media screen and (max-width: 768px) {
    font-size: 4.5em;
  }
  @media screen and (max-width: 380px) {
    font-size: 3.5em;
  }
`;

const Paragraph = styled.p`
  margin: 0;
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5em;
  }
  @media screen and (max-width: 380px) {
    font-size: 18px;
  }
`;

export default function Hero() {
  return (
    <Container>
      <Heading>Hi. I`m Arianit</Heading>
      <Paragraph>Frontend developer and UI/UX designer.</Paragraph>
    </Container>
  );
}
