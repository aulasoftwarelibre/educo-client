import * as React from 'react';
import { PropsFromDispatch, PropsFromState } from '../containers/QuestionView';
import { Column, Grid, Row } from '../../layout/components/Grid';
import { Countdown } from './Countdown';
import { Question } from './Question';
import { Answer } from './Answer';

export const QuestionView = ({
    question: { content, durationSeconds, elapsedSeconds, answers },
    voteAnswerWithId,
}: Props): JSX.Element => {
    const [remainingSeconds, setRemainingSeconds] = React.useState(
        durationSeconds - Math.ceil(elapsedSeconds)
    );

    React.useEffect(() => {
        const interval = setInterval(() => {
            if(remainingSeconds < 1) {
                return;
            }

            setRemainingSeconds(remainingSeconds - 1);
        }, 1000);

        return () => clearInterval(interval);
    });

    return(
        <Grid>
            { remainingSeconds &&
                <Row>
                    <Column>
                        <Countdown
                            value={ remainingSeconds }
                            total={ durationSeconds }
                            progress={'value'}
                            indicating
                        />
                    </Column>
                </Row>
            }
            <Row>
                <Column>
                    <Question>
                        { content }
                    </Question>
                </Column>
            </Row>
            { answers.map(({ id, content }, index) =>
                <Row key={ index }>
                    <Column key={ index }>
                        <Answer
                            key={ index }
                            color={ index % 3 === 0 ? 'red' : index % 3 === 1 ? 'blue' : 'yellow' }
                            disabled={ remainingSeconds < 1 }
                            onClick={ () => voteAnswerWithId(id) }
                        >
                            { content }
                        </Answer>
                    </Column>
                </Row>
            )}
        </Grid>
    );
};

export type Props = PropsFromState & PropsFromDispatch;
