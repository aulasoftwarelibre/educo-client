import * as React from 'react';
import styled from 'styled-components';
import { Progress } from 'semantic-ui-react';
import { colorsPalette, PaletteColor } from '../../utils/colors-palette';

export const Stat = styled(Progress)`
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
