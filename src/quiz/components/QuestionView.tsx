import * as React from 'react';
import { PropsFromDispatch, PropsFromState } from '../containers/QuestionView';
import { Column, Grid, Row } from '../../layout/components/Grid';
import { Question } from './Question';
import { Answer } from './Answer';

export const QuestionView = ({
    question,
    answer1,
    answer2,
    answer3,
}: Props): JSX.Element =>
    <Grid>
        <Row>
            <Column>
                <Question>
                    { question }
                </Question>
            </Column>
        </Row>
        <Row>
            <Column>
                <Answer color={'red'}>
                    { answer1 }
                </Answer>
            </Column>
        </Row>
        <Row>
            <Column>
                <Answer color={'blue'}>
                    { answer2 }
                </Answer>
            </Column>
        </Row>
        <Row>
            <Column>
                <Answer color={'yellow'}>
                    { answer3 }
                </Answer>
            </Column>
        </Row>
    </Grid>
;

export type Props = PropsFromState & PropsFromDispatch;
