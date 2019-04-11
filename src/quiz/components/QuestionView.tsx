import * as React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import { PropsFromDispatch, PropsFromState } from '../containers/QuestionView';
import { Grid as StyledGrid } from '../../layout/components/Grid';
import { colorsPalette, PaletteColor } from '../../utils/colors-palette';

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

const Question = styled.h1`
    font-size: 3vh;
    font-weight: 900;
    padding: 2vh 10vw;
    text-align: justify;
    
    @media only screen and (orientation:landscape) {
        font-size: 6vh; 
    }
`;

const Answer = styled(Button)`
    background: ${(props: AnswerProps) => colorsPalette[props.color]} !important;
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

interface AnswerProps {
    color: PaletteColor,
}
