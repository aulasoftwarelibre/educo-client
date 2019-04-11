import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import { PropsFromDispatch, PropsFromState } from '../containers/StatsView';
import { Grid as StyledGrid } from '../../layout/components/Grid';
import { Question } from '../../quiz/components/Question';
import { Stat } from './Stat';

export const StatsView = ({
    question,
    percentage1,
    percentage2,
    percentage3,
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
                <Stat
                    color={'red'}
                    percent={ percentage1 }
                    progress
                />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <Stat
                    color={'blue'}
                    percent={ percentage2 }
                    progress
                />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <Stat
                    color={'yellow'}
                    percent={ percentage3 }
                    progress
                />
            </Grid.Column>
        </Grid.Row>
    </StyledGrid>
;

export type Props = PropsFromState & PropsFromDispatch;
