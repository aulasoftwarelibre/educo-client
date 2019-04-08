import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StatsView } from '../components/StatsView';
import { State } from '../../reducer';

const mapStateToProps = ({
    quiz: { question },
    stats: { percentage1, percentage2, percentage3 },
}: State): PropsFromState => ({
    question: question!.content,
    percentage1: percentage1!,
    percentage2: percentage2!,
    percentage3: percentage3!,
});

export interface PropsFromState {
    question: string,
    percentage1: number,
    percentage2: number,
    percentage3: number,
}

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
});

export interface PropsFromDispatch {
}

export default connect(mapStateToProps, mapDispatchToProps)(StatsView);
