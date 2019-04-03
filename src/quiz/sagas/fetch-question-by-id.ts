import { AnyAction } from 'redux';
import { call, put } from 'redux-saga/effects';
import { fetchQuestionById } from '../api/fetch-question-by-id';
import { Question } from '../reducer';
import { fetchQuestionByIdFailure, fetchQuestionByIdSuccess} from '../actions/fetch-question-by-id';

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
