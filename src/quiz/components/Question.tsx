import * as React from 'react';
import styled from 'styled-components';

export const Question = styled.h1`
    font-size: 3vh;
    font-weight: 900;
    padding: 2vh 10vw;
    text-align: justify;
    
    @media only screen and (orientation:landscape) {
        font-size: 6vh; 
    }
`;
