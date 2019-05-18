import * as React from "react";
import styled, { css } from "styled-components";
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
          <div>
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
            <ProgressBars>
              {answers.map(({ id, content, correct, rate }, index) => (
                <AnswerStat isLastElement={answers.length === index + 1}>
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
                </AnswerStat>
              ))}
            </ProgressBars>
          </div>
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
  width: 100%;
  padding: 25vh 5vh 25vh 5vh;

  @media only screen and (orientation: landscape) {
    padding: 25vh 15vh 25vh 15vh;
  }
`;

const ProgressBars = styled.div`
  margin-top: 30px;
`;

const AnswerStat = styled.div`
  ${(props: { isLastElement: boolean }) =>
    !props.isLastElement &&
    css`
      padding-bottom: 25px;

      @media only screen and (orientation: landscape) {
        padding-bottom: 15px;
      }
    `}
`;

interface SpanProps {
  color: PaletteColor;
}
