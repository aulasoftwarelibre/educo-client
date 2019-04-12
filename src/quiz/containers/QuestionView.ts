import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { QuestionView } from '../components/QuestionView';
import { State } from '../../reducer';
import { Question } from '../reducer';

const mapStateToProps = ({
    quiz: { question },
}: State): PropsFromState => ({
    question: question!,
});

export interface PropsFromState {
    question: Question,
}

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
});

export interface PropsFromDispatch {
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionView);
