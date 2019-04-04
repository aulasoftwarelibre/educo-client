import React from 'react';
import styled from 'styled-components';
import { PropsFromDispatch, PropsFromState } from '../containers/App';
import { Header } from './Header';
import { Footer } from './Footer';
import { WaitingView } from './WaitingView';
import QuestionView from '../../quiz/containers/QuestionView';

export const App = ({
    view,
}: Props): JSX.Element =>
    <>
        <Header />
        <View>
            { view === 'waiting' &&
                <WaitingView />
            }
            { view === 'question' &&
                <QuestionView />
            }
        </View>
        <Footer />
    </>
;

export type Props = PropsFromState & PropsFromDispatch;

const View = styled.div`
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
