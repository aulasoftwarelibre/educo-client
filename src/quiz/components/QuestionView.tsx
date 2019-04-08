import * as React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import { PropsFromDispatch, PropsFromState } from '../containers/QuestionView';

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
                <RedButton>
                    { answer1 }
                </RedButton>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <BlueButton>
                    { answer2 }
                </BlueButton>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <YellowButton>
                    { answer3 }
                </YellowButton>
            </Grid.Column>
        </Grid.Row>
    </StyledGrid>
;

export type Props = PropsFromState & PropsFromDispatch;

const StyledGrid = styled(Grid)`
    margin: 0 !important;
`;

const Question = styled.h1`
    font-size: 3vh;
    font-weight: 900;
    padding: 2vh 10vw;
    text-align: justify;
    
    @media only screen and (orientation:landscape) {
        font-size: 6vh; 
    }
`;

const RedButton = styled(Button)`
    background: #a6192e !important;
    color: rgba(255, 255, 255, 0.8) !important;
    width: 80vw;
    height: 8vh;
    font-size: 3vh !important;
    padding: 0 !important;
    margin: 0 10vw !important;
    
    @media only screen and (orientation:landscape) {
        height: 12vh;
        font-size: 6vh !important;
    }
`;

const BlueButton = styled(Button)`
    background: #211551 !important;
    color: rgba(255, 255, 255, 0.8) !important;
    width: 80vw;
    height: 8vh;
    font-size: 3vh !important;
    padding: 0 !important;
    margin: 0 10vw !important;
    
    @media only screen and (orientation:landscape) {
        height: 12vh;
        font-size: 6vh !important;
    }
`;

const YellowButton = styled(Button)`
    background: #f6be00 !important;
    color: rgba(255, 255, 255, 0.8) !important;
    width: 80vw;
    height: 8vh;
    font-size: 3vh !important;
    padding: 0 !important;
    margin: 0 10vw !important;
    
    @media only screen and (orientation:landscape) {
        height: 12vh;
        font-size: 6vh !important;
    }
`;
