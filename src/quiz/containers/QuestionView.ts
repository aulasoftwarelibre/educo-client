import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { QuestionView } from '../components/QuestionView';
import { State } from '../../reducer';

const mapStateToProps = ({
    quiz: { question, answers },
}: State): PropsFromState => ({
    question: question!.content,
    answer1: answers![0].content,
    answer2: answers![1].content,
    answer3: answers![2].content,
});

export interface PropsFromState {
    question: string,
    answer1: string,
    answer2: string,
    answer3: string,
}

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
});

export interface PropsFromDispatch {
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionView);
