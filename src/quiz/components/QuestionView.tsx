import * as React from "react";
import styled, { css } from "styled-components";
import { Transition } from "semantic-ui-react";
import { PropsFromDispatch, PropsFromState } from "../containers/QuestionView";
import { Column, Grid, Row } from "../../layout/components/Grid";
import { Countdown } from "./Countdown";
import { Question } from "./Question";
import { Answer } from "./Answer";

export const QuestionView = ({
  question: { content, durationSeconds, elapsedSeconds, answers },
  votedAnswer,
  voteAnswerWithId
}: Props): JSX.Element => {
  const [visible, setVisible] = React.useState(false);
  const [remainingSeconds, setRemainingSeconds] = React.useState(
    durationSeconds - Math.ceil(elapsedSeconds)
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (remainingSeconds < 1) {
        return;
      }

      setRemainingSeconds(remainingSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  });

  React.useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Container>
      <Transition.Group animation={"fade down"} duration={2000}>
        {visible && (
          <div>
            {remainingSeconds > 0 && (
              <Remaining>
                <Countdown
                  value={remainingSeconds}
                  total={durationSeconds}
                  progress={"value"}
                  indicating
                />
              </Remaining>
            )}
            <Question>{content}</Question>
            <Buttons>
              {answers.map(({ id, content }, index) => (
                <AnswerButton isLastElement={answers.length === index + 1}>
                  <Answer
                    key={id}
                    color={
                      index % 3 === 0
                        ? "red"
                        : index % 3 === 1
                        ? "blue"
                        : "yellow"
                    }
                    disabled={
                      (votedAnswer && votedAnswer.id !== id) ||
                      (!votedAnswer && remainingSeconds < 1)
                    }
                    onClick={() => {
                      !votedAnswer && voteAnswerWithId(id);
                    }}
                  >
                    {content}
                  </Answer>
                </AnswerButton>
              ))}
            </Buttons>
          </div>
        )}
      </Transition.Group>
    </Container>
  );
};

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

const Buttons = styled.div`
  padding-top: 20px;
`;

const Remaining = styled.div`
  padding-bottom: 20px;
`;

const AnswerButton = styled.div`
  ${(props: { isLastElement: boolean }) =>
    !props.isLastElement &&
    css`
      padding-bottom: 25px;

      @media only screen and (orientation: landscape) {
        padding-bottom: 15px;
      }
    `}
`;

export type Props = PropsFromState & PropsFromDispatch;
