import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import { colorsPalette } from '../../utils/colors-palette';

export const WaitingView = ({
}: Props): JSX.Element =>
    <StyledGrid>
        <Grid.Row>
            <Grid.Column width={16}>
                <Title>
                    ed
                    <Span color={'red'}>
                        U
                    </Span>
                    <Span
                        color={'blue'}
                        stretched
                    >
                        C
                    </Span>
                    <Span color={'yellow'}>
                        O
                    </Span>
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

const Span = styled.span`
    color: ${props => colorsPalette[props.color]};
    letter-spacing: ${props => props.stretched ? '-1vw' : '-0.25vw'};
`;
