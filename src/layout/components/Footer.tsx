import React from "react";
import styled from "styled-components";

export const Footer = ({  }: Props): JSX.Element => (
  <footer>
    <Subtitle>uco.es/educo</Subtitle>
  </footer>
);

export interface Props {}

const Subtitle = styled.h2`
  text-align: center;
  font-size: 4vw;
`;
