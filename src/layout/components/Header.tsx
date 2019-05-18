import React from "react";
import styled from "styled-components";
import { Logo } from "./Logo";

export const Header = ({  }: Props): JSX.Element => (
  <header>
    <Logo
      src={`${process.env.PUBLIC_URL}/assets/img/logo-uco.svg`}
      floated={"left"}
    />
    <Logo
      src={`${process.env.PUBLIC_URL}/assets/img/logo-asl.svg`}
      floated={"right"}
    />
  </header>
);

export interface Props {}
