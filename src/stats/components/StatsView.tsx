import * as React from 'react';
import styled from 'styled-components';
import { PropsFromDispatch, PropsFromState } from '../containers/StatsView';
import { Column, Grid, Row } from '../../layout/components/Grid';
import { Question } from '../../quiz/components/Question';
import { Stat } from './Stat';
import { colorsPalette, PaletteColor } from '../../utils/colors-palette';

export const StatsView = ({
    question: { content, answers },
    votedAnswer,
}: Props): JSX.Element => {

    const correctIndex = answers.findIndex(({ correct }) => correct!);

    return(
        <Grid>
            <Row>
                <Column>
                    <Question>
                        { content }
                        <Span color={ correctIndex % 3 === 0 ? 'red' : correctIndex % 3 === 1 ? 'blue' : 'yellow' }>
                            {` ${answers[correctIndex].content}`}
                        </Span>
                        .
                    </Question>
                </Column>
            </Row>
            { !votedAnswer && answers.map(({ content, correct, rate }, index) =>
                <Row key={ index }>
                    <Column key={ index }>
                        <Stat
                            key={ index }
                            color={ index % 3 === 0 ? 'red' : index % 3 === 1 ? 'blue' : 'yellow' }
                            disabled={ !correct }
                            percent={ Math.round(rate!) }
                            progress
                        />
                    </Column>
                </Row>
            )}
        </Grid>
    );
};

export type Props = PropsFromState & PropsFromDispatch;

const Span = styled.span`
    color: ${(props: SpanProps) => colorsPalette[props.color]};
`;

interface SpanProps {
    color: PaletteColor,
}
