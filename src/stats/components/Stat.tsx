import * as React from "react";
import styled from "styled-components";
import { Progress, ProgressProps } from "semantic-ui-react";
import { colorsPalette, PaletteColor } from "../../utils/colors-palette";

export const Stat = styled(Progress)`
  .bar {
    background: ${(props: Props) => colorsPalette[props.color]} !important;
    height: 8vh !important;
    width: ${(props: Props) => Number(props.percent) * 0.85 + 15}% !important;
  }

  .bar > .progress {
    color: rgba(255, 255, 255, 0.8) !important;
  }

  width: 100%;
  height: 8vh;
  font-size: 3vh !important;
  margin: 0 !important;

  @media only screen and (orientation: landscape) {
    .bar {
      height: 12vh !important;
      width: ${(props: Props) => Number(props.percent) * 0.9 + 10}% !important;
    }

    height: 12vh;
    font-size: 6vh !important;
  }
`;

type Props = ProgressProps & StatProps;

interface StatProps {
  color: PaletteColor;
}
