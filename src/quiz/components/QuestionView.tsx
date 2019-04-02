import * as React from 'react';
import { Button, Grid, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import { PropsFromDispatch, PropsFromState } from '../containers/QuestionView';

export const QuestionView = ({
    question,
    answer1,
    answer2,
    answer3,
}: Props): JSX.Element =>
    <Grid>
        <Grid.Row>
            <Grid.Column>
                <Header>
                    { question }
                </Header>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <RedButton
                    fluid
                    size={'massive'}
                >
                    { answer1 }
                </RedButton>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <BlueButton
                    fluid
                    size={'massive'}
                >
                    { answer2 }
                </BlueButton>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <YellowButton
                    fluid
                    size={'massive'}
                >
                    { answer3 }
                </YellowButton>
            </Grid.Column>
        </Grid.Row>
    </Grid>
;

export type Props = PropsFromState & PropsFromDispatch;

const RedButton = styled(Button)`
    background: #a90132 !important;
    color: #ffffff !important;
`;

const BlueButton = styled(Button)`
    background: #241b5c !important;
    color: #ffffff !important;
`;

const YellowButton = styled(Button)`
    background: #f1b310 !important;
    color: #ffffff !important;
`;
