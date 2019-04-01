import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { App } from '../components/App';
import { View } from '../reducer';
import { State } from '../../reducer';

const mapStateToProps = ({
    layout: { view }
}: State): PropsFromState => ({
    view,
});

export interface PropsFromState {
    view: View,
}

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
});

export interface PropsFromDispatch {
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
