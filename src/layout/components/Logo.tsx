import styled from "styled-components";
import { Image } from "semantic-ui-react";

export const Logo = styled(Image)`
  height: 20vh;
  padding: 2vh 2vw;
  margin: 0 !important;
  opacity: 0.4;
  filter: alpha(opacity=40);

  @media only screen and (orientation: portrait) {
    visibility: hidden;
  }
`;
