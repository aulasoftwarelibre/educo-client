import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

export const WaitingView = ({
}: Props): JSX.Element =>
    <Grid>
        <Grid.Row>
            <Grid.Column width={16}>
                <Title>
                    ed<Red>U</Red><Blue>C</Blue><Yellow>O</Yellow>
                </Title>
            </Grid.Column>
            <Grid.Column width={16}>
                <Subtitle>
                    GALA DE VIDA UNIVERSITARIA Y DEPORTE
                </Subtitle>
            </Grid.Column>
        </Grid.Row>
    </Grid>
;

export interface Props {
}

const Title = styled.h1`
    text-align: center;
    font-size: 15vw;
    font-weight: 900;
`;

const Subtitle = styled.h2`
    text-align: center;
    font-size: 4vw;
`;

const Red = styled.span`
    color: #a6192e;
    letter-spacing: -1vw;
`;

const Blue = styled.span`
    color: #211551;
    letter-spacing: -1vw;
`;

const Yellow = styled.span`
    color: #f6be00;
    letter-spacing: -1vw;
`;
