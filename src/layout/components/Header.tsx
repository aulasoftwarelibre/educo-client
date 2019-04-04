import React from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

export const Header = ({
}: Props): JSX.Element =>
    <Container>
        <Logo
            src={`${process.env.PUBLIC_URL}/assets/img/logo-uco.svg`}
            floated={'left'}
        />
        <Logo
            src={`${process.env.PUBLIC_URL}/assets/img/logo-asl.svg`}
            floated={'right'}
        />
    </Container>
;

export interface Props {
}

const Container = styled.header`
    height: 15vh;
`;

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
