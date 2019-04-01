import React from 'react';
import styled from 'styled-components';

export const Header = ({
}: Props): JSX.Element =>
    <Container>header</Container>
;

export interface Props {
}

const Container = styled.header`
    background-color: #221c35;
    height: 10vh;
`;
