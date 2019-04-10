import * as React from 'react';
import { Grid, Progress } from 'semantic-ui-react';
import styled from 'styled-components';
import { PropsFromDispatch, PropsFromState } from '../containers/StatsView';
import {colorsPalette, PaletteColor} from '../../utils/colors-palette';

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

const Stat = styled(Progress)`
    .bar {
        background: ${(props: StatProps) => colorsPalette[props.color]} !important;
        height: 8vh !important;
    }
    
    .bar > .progress {
        color: rgba(255, 255, 255, 0.8) !important;
    }

    width: 80vw;
    height: 8vh;
    font-size: 3vh !important;
    margin: 0 10vw !important;
    
    @media only screen and (orientation:landscape) {
        .bar {
            height: 12vh !important;
        }
        
        height: 12vh;
        font-size: 6vh !important;
    }
`;

interface StatProps {
    color: PaletteColor,
}
