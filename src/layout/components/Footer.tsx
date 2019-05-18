import React from "react";
import styled from "styled-components";

export const Footer = ({  }: Props): JSX.Element => (
  <Container>
    <Subtitle>uco.es/educo</Subtitle>
  </Container>
);

export interface Props {}

const Container = styled.footer`
  height: 15vh;
`;

const Subtitle = styled.h2`
  text-align: center;
  font-size: 4vw;
`;
