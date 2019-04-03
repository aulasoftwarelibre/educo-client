import { AnyAction } from 'redux';
import { call, put } from 'redux-saga/effects';
import { fetchQuestionById } from '../api/fetch-question-by-id';
import { Question } from '../reducer';
import { fetchQuestionByIdFailure, fetchQuestionByIdSuccess} from '../actions/fetch-question-by-id';
import { fetchAnswersByQuestionId } from '../api/fetch-answers-by-question-id';
import { fetchAnswersByQuestionIdSuccess } from '../actions/fetch-answers-by-question-id';

export function* handleFetchQuestionById({ id }: AnyAction) {
    try {
        const { data } = yield call(fetchQuestionById, id);
        const question: Question = {
            id: data['@id'],
            content: data.content,
        };

        yield put(fetchQuestionByIdSuccess(question));
    } catch(error) {
        yield put(fetchQuestionByIdFailure);
    }
}

export function* handleFetchQuestionByIdSuccess({ question: { id } }: AnyAction) {
    try {
        const { data } = yield call(fetchAnswersByQuestionId, id);
        const answers = data['hydra:member'];

        yield put(fetchAnswersByQuestionIdSuccess(answers[0], answers[1], answers[2]));
    } catch(error) {
        yield put(fetchQuestionByIdFailure);
    }
}