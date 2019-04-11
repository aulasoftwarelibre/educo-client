import * as React from 'react';
import { PropsFromDispatch, PropsFromState } from '../containers/StatsView';
import { Column, Grid, Row } from '../../layout/components/Grid';
import { Question } from '../../quiz/components/Question';
import { Stat } from './Stat';

export const StatsView = ({
    question,
    percentage1,
    percentage2,
    percentage3,
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
                <Stat
                    color={'red'}
                    percent={ percentage1 }
                    progress
                />
            </Column>
        </Row>
        <Row>
            <Column>
                <Stat
                    color={'blue'}
                    percent={ percentage2 }
                    progress
                />
            </Column>
        </Row>
        <Row>
            <Column>
                <Stat
                    color={'yellow'}
                    percent={ percentage3 }
                    progress
                />
            </Column>
        </Row>
    </Grid>
;

export type Props = PropsFromState & PropsFromDispatch;
