import React from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { App } from '../components/App';
import { State } from '../../reducer';
import { WaitingView } from '../components/WaitingView';
import QuestionView from '../../quiz/containers/QuestionView';
import StatsView from '../../stats/containers/StatsView';
import { fetchSessionById }  from '../../quiz/actions/fetch-session-by-id';

const mapStateToProps = ({
    quiz: { question },
}: State): PropsFromState => ({
    view: !question ? <WaitingView /> : question.open ? <QuestionView /> : <StatsView />,
});

export interface PropsFromState {
    view: React.ReactNode,
}

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
    fetchSessionState: () => dispatch(fetchSessionById),
});

export interface PropsFromDispatch {
    fetchSessionState: () => AnyAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
