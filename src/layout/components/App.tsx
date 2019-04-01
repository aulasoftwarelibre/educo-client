import React from 'react';
import styled from 'styled-components';
import { PropsFromDispatch, PropsFromState } from '../containers/App';
import { Header } from './Header';
import { Footer } from './Footer';

export const App = ({
    view,
}: Props): JSX.Element =>
    <>
        <Header />
        <View>
            view
        </View>
        <Footer />
    </>
;

export type Props = PropsFromState & PropsFromDispatch;

const View = styled.div`
    height: 80vh;
    padding: 10vh 5vw;
`;
