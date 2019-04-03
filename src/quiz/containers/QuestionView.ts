import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { QuestionView } from '../components/QuestionView';
import { State } from '../../reducer';
import { Question } from '../reducer';

const mapStateToProps = ({
    quiz: { question, answer1, answer2, answer3 }
}: State): PropsFromState => ({
    question,
    answer1,
    answer2,
    answer3,
});

export interface PropsFromState {
    question?: Question,
    answer1?: string,
    answer2?: string,
    answer3?: string,
}

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
});

export interface PropsFromDispatch {
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionView);
