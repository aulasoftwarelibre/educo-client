import React from 'react';
import styled from 'styled-components';
import { PropsFromDispatch, PropsFromState } from '../containers/App';
import { Header } from './Header';
import { Footer } from './Footer';
import { WaitingView } from './WaitingView';

export const App = ({
    view,
}: Props): JSX.Element =>
    <>
        <Header />
        <View>
            <WaitingView />
        </View>
        <Footer />
    </>
;

export type Props = PropsFromState & PropsFromDispatch;

const View = styled.div`
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
