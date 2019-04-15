import * as React from 'react';
import { PropsFromDispatch, PropsFromState } from '../containers/StatsView';
import { Column, Grid, Row } from '../../layout/components/Grid';
import { Question } from '../../quiz/components/Question';
import { Stat } from './Stat';

export const StatsView = ({
    question: { content, answers },
}: Props): JSX.Element =>
    <Grid>
        <Row>
            <Column>
                <Question>
                    { content }
                </Question>
            </Column>
        </Row>
        { answers.map(({ rate }, index) =>
            <Row key={ index }>
                <Column key={ index }>
                    <Stat
                        key={ index }
                        color={ index % 3 === 0 ? 'red' : index % 3 === 1 ? 'blue' : 'yellow' }
                        percent={ Math.round(rate) }
                        progress
                    />
                </Column>
            </Row>
        )}
    </Grid>
;

export type Props = PropsFromState & PropsFromDispatch;
