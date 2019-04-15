import * as React from 'react';
import { PropsFromDispatch, PropsFromState } from '../containers/QuestionView';
import { Column, Grid, Row } from '../../layout/components/Grid';
import { Question } from './Question';
import { Answer } from './Answer';

export const QuestionView = ({
    question: { content, answers },
    voteAnswerWithId,
}: Props): JSX.Element =>
    <Grid>
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
                        onClick={() => voteAnswerWithId(id)}
                    >
                        { content }
                    </Answer>
                </Column>
            </Row>
        )}
    </Grid>
;

export type Props = PropsFromState & PropsFromDispatch;
