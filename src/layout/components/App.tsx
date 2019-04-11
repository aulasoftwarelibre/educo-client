import React from 'react';
import styled from 'styled-components';
import { PropsFromDispatch, PropsFromState } from '../containers/App';
import { Header } from './Header';
import { Footer } from './Footer';
import { WaitingView } from './WaitingView';
import QuestionView from '../../quiz/containers/QuestionView';
import StatsView from '../../stats/containers/StatsView';

export class App extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSessionState();
    }

    render() {
        const { view } = this.props;

        return(
            <>
                <Header/>
                <View>
                    { views[view] }
                </View>
                <Footer/>
            </>
        );
    }
}

export type Props = PropsFromState & PropsFromDispatch;

const views = {
    'waiting': <WaitingView />,
    'question': <QuestionView />,
    'stats': <StatsView />,
};

const View = styled.div`
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
