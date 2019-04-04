import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

export const WaitingView = ({
}: Props): JSX.Element =>
    <StyledGrid>
        <Grid.Row>
            <Grid.Column width={16}>
                <Title>
                    ed<U>U</U><C>C</C><O>O</O>
                </Title>
            </Grid.Column>
            <Grid.Column width={16}>
                <Subtitle>
                    GALA DE VIDA UNIVERSITARIA Y DEPORTE
                </Subtitle>
            </Grid.Column>
        </Grid.Row>
    </StyledGrid>
;

export interface Props {
}

const StyledGrid = styled(Grid)`
    margin: 0 !important;
`;

const Title = styled.h1`
    text-align: center;
    font-size: 15vw;
    font-weight: 900;
`;

const Subtitle = styled.h2`
    text-align: center;
    font-size: 4vw;
`;

const U = styled.span`
    color: #a6192e;
    letter-spacing: -0.25vw;
`;

const C = styled.span`
    color: #211551;
    letter-spacing: -1vw;
`;

const O = styled.span`
    color: #f6be00;
    letter-spacing: -0.25vw;
`;
