import * as React from 'react';
import styled from 'styled-components';
import { Progress } from 'semantic-ui-react';

export const Countdown = styled(Progress)`
    .bar {
        height: 4vh !important;
    }
    
    .bar > .progress {
        color: rgba(255, 255, 255, 0.8) !important;
    }

    width: 80vw;
    height: 4vh;
    font-size: 3vh !important;
    margin: 0 10vw !important;
    
    @media only screen and (orientation:landscape) {
        .bar {
            height: 6vh !important;
        }
        
        height: 6vh;
        font-size: 6vh !important;
    }
`;
