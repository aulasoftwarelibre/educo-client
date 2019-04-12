import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

const Logo = styled(Image)`
    height: 15vh;
    padding: 2vh 2vw;
    margin: 0 !important;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    opacity: 0.25;
    filter: alpha(opacity=25);
    
    @media only screen and (orientation:portrait) {
        visibility: hidden;
    }
    
    @media only screen and (max-height: 992px) {
        visibility: hidden;
    }
`;
