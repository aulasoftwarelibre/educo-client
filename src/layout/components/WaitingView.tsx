import * as React from "react";
import styled from "styled-components";
import { Transition } from "semantic-ui-react";
import { Column, Grid, Row } from "./Grid";
import { colorsPalette, PaletteColor } from "../../utils/colors-palette";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const WaitingView = ({  }: Props): JSX.Element => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Container>
      <Transition.Group animation={"fade down"} duration={2000}>
        {visible && (
          <Content>
            <Header />
            <div>
              <Title>
                ed
                <Span color={"red"}>U</Span>
                <Span color={"blue"} stretched>
                  C
                </Span>
                <Span color={"yellow"}>O</Span>
              </Title>
              <Subtitle>GALA DE VIDA UNIVERSITARIA Y DEPORTE</Subtitle>
            </div>
            <Footer />
          </Content>
        )}
      </Transition.Group>
    </Container>
  );
};

export interface Props {}

const Title = styled.h1`
  text-align: center;
  font-size: 15vw;
  font-weight: 900;
`;

const Subtitle = styled.h2`
  text-align: center;
  font-size: 4vw;
`;

const Span = styled.span`
  color: ${(props: SpanProps) => colorsPalette[props.color]};
  letter-spacing: ${(props: SpanProps) =>
    props.stretched ? "-1vw" : "-0.25vw"};
`;

const Content = styled.div`
  &&& {
    display: flex !important;
    height: 100%;

    flex-direction: column;
    justify-content: space-between;
  }
`;

const Animation = styled(Transition.Group)``;

const Container = styled.div`
  padding: 1vh 2% 5vh;
  width: 100%;
  height: 100vh;
`;

interface SpanProps {
  color: PaletteColor;
  stretched?: boolean;
}
