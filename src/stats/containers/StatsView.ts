import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StatsView } from '../components/StatsView';
import { State } from '../../reducer';
import { Answer, Question } from '../../quiz/reducer';

const mapStateToProps = ({
    quiz: { question, votedAnswer },
}: State): PropsFromState => ({
    question: question!,
    votedAnswer,
});

export interface PropsFromState {
    question: Question,
    votedAnswer?: Answer,
}

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
});

export interface PropsFromDispatch {
}

export default connect(mapStateToProps, mapDispatchToProps)(StatsView);
