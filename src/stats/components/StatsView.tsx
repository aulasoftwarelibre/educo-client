import * as React from "react";
import styled from "styled-components";
import { Transition } from "semantic-ui-react";
import { PropsFromDispatch, PropsFromState } from "../containers/StatsView";
import { Column, Grid, Row } from "../../layout/components/Grid";
import { Question } from "../../quiz/components/Question";
import { Answer } from "../../quiz/components/Answer";
import { Stat } from "./Stat";
import { colorsPalette, PaletteColor } from "../../utils/colors-palette";

export const StatsView = ({
  question: { content, answers },
  votedAnswer
}: Props): JSX.Element => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setVisible(true);
  }, []);

  const correctIndex = answers.findIndex(({ correct }) => correct!);

  return (
    <Container>
      <Transition.Group animation={"fade down"} duration={2000}>
        {visible && (
          <Grid>
            <Row>
              <Column>
                <Question>
                  {content}
                  <Span
                    color={
                      correctIndex % 3 === 0
                        ? "red"
                        : correctIndex % 3 === 1
                        ? "blue"
                        : "yellow"
                    }
                  >
                    {` ${answers[correctIndex].content}`}
                  </Span>
                  .
                </Question>
              </Column>
            </Row>
            {answers.map(({ id, content, correct, rate }, index) => (
              <Row key={index}>
                <Column key={index}>
                  {votedAnswer ? (
                    <Answer
                      key={index}
                      positive={correct}
                      negative={!correct && votedAnswer.id === id}
                    >
                      {content}
                    </Answer>
                  ) : (
                    <Stat
                      key={index}
                      color={
                        index % 3 === 0
                          ? "red"
                          : index % 3 === 1
                          ? "blue"
                          : "yellow"
                      }
                      percent={Math.round(rate!)}
                      progress
                    />
                  )}
                </Column>
              </Row>
            ))}
          </Grid>
        )}
      </Transition.Group>
    </Container>
  );
};

export type Props = PropsFromState & PropsFromDispatch;

const Span = styled.span`
  color: ${(props: SpanProps) => colorsPalette[props.color]};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface SpanProps {
  color: PaletteColor;
}
