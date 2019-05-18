import * as React from 'react';
import styled from 'styled-components';
import { Transition } from 'semantic-ui-react';
import { Column, Grid, Row } from './Grid';
import { colorsPalette, PaletteColor } from '../../utils/colors-palette';

export const WaitingView = ({  }: Props): JSX.Element => {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <Grid>
            <Transition.Group animation={'fade down'} duration={2000}>
                {visible && [
                    <Row key="row">
                        <Column width={16}>
                            <Title>
                                ed
                                <Span color={'red'}>U</Span>
                                <Span color={'blue'} stretched>
                                    C
                                </Span>
                                <Span color={'yellow'}>O</Span>
                            </Title>
                        </Column>
                        <Column width={16}>
                            <Subtitle>GALA DE VIDA UNIVERSITARIA Y DEPORTE</Subtitle>
                        </Column>
                    </Row>,
                ]}
            </Transition.Group>
        </Grid>
    );
};

export interface Props {}

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
    color: ${(props: SpanProps) => colorsPalette[props.color]};
    letter-spacing: ${(props: SpanProps) => (props.stretched ? '-1vw' : '-0.25vw')};
`;

interface SpanProps {
    color: PaletteColor;
    stretched?: boolean;
}
