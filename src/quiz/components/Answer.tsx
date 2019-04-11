import * as React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { colorsPalette, PaletteColor } from '../../utils/colors-palette';

export const Answer = styled(Button)`
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
