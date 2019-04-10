import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { App } from '../components/App';
import { State } from '../../reducer';
import { Question } from '../../quiz/reducer';
import { fetchSessionById }  from '../../quiz/actions/fetch-session-by-id';

const mapStateToProps = ({
    quiz: { question },
}: State): PropsFromState => ({
    question: question,
});

export interface PropsFromState {
    question?: Question,
}

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
    fetchSessionState: () => dispatch(fetchSessionById),
});

export interface PropsFromDispatch {
    fetchSessionState: () => AnyAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
