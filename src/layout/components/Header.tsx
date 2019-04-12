import React from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';

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
