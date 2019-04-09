import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { App } from '../components/App';
import { View } from '../reducer';
import { State } from '../../reducer';
import { fetchSessionById }  from '../../quiz/actions/fetch-session-by-id';

const mapStateToProps = ({
    layout: { view },
}: State): PropsFromState => ({
    view,
});

export interface PropsFromState {
    view: View,
}

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
    fetchSessionState: () => dispatch(fetchSessionById),
});

export interface PropsFromDispatch {
    fetchSessionState: () => AnyAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
