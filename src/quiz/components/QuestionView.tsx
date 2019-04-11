import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import { PropsFromDispatch, PropsFromState } from '../containers/QuestionView';
import { Grid as StyledGrid } from '../../layout/components/Grid';
import { Question } from './Question';
import { Answer } from './Answer';

export const QuestionView = ({
    question,
    answer1,
    answer2,
    answer3,
}: Props): JSX.Element =>
    <StyledGrid>
        <Grid.Row>
            <Grid.Column>
                <Question>
                    { question }
                </Question>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <Answer color={'red'}>
                    { answer1 }
                </Answer>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <Answer color={'blue'}>
                    { answer2 }
                </Answer>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <Answer color={'yellow'}>
                    { answer3 }
                </Answer>
            </Grid.Column>
        </Grid.Row>
    </StyledGrid>
;

export type Props = PropsFromState & PropsFromDispatch;
