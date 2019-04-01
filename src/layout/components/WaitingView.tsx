import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

export const WaitingView = ({
}: Props): JSX.Element =>
    <Grid>
        <Grid.Row columns={1}>
            <Grid.Column>
                <Title>
                    ed<Red>U</Red><Blue>C</Blue><Yellow>O</Yellow>
                </Title>
            </Grid.Column>
            <Grid.Column>
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
    font-size: 10vw;
`;

const Subtitle = styled.h2`
    text-align: center;
    font-size: 2vw;
`;

const Red = styled.span`
    color: #a90132;
`;

const Blue = styled.span`
    color: #241b5c;
`;

const Yellow = styled.span`
    color: #f1b310;
`;
