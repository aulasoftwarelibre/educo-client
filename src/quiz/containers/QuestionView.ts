import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { QuestionView } from '../components/QuestionView';
import { State } from '../../reducer';
import { Answer, Question } from '../reducer';
import { voteAnswerWithId } from '../actions/vote-answer-with-id';

const mapStateToProps = ({
    quiz: { question, votedAnswer },
}: State): PropsFromState => ({
    question: question!,
    votedAnswer: votedAnswer,
});

export interface PropsFromState {
    question: Question,
    votedAnswer?: Answer,
}

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
    voteAnswerWithId: (id: string) => dispatch(voteAnswerWithId(id)),
});

export interface PropsFromDispatch {
    voteAnswerWithId: (id: string) => AnyAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionView);
