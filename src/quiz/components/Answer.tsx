import * as React from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import { colorsPalette, PaletteColor } from "../../utils/colors-palette";

export const Answer = styled(Button)`
  background: ${({ color }: AnswerButtonProps) =>
    colorsPalette[color]} !important;
  color: rgba(255, 255, 255, 0.8) !important;
  width: 100%;
  height: 12vh;
  font-size: 3vh !important;
  display: flex;
  justify-content: center;
  padding: 0 !important;

  @media only screen and (orientation: landscape) {
    height: 15vh;
    font-size: 5vh !important;
  }
`;

interface AnswerProps {
  color: PaletteColor;
}

type AnswerButtonProps = AnswerProps;
