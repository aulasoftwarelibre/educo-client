import { all, fork, takeEvery } from 'redux-saga/effects';
import { FETCH_QUESTION_BY_ID, FETCH_QUESTION_BY_ID_SUCCESS } from '../actions/fetch-question-by-id';
import { handleFetchQuestionById, handleFetchQuestionByIdSuccess } from './fetch-question-by-id';

export function* saga() {
    yield all([
        fork(watchFetchQuestionById),
        fork(watchFetchQuestionByIdSuccess),
    ]);
}

export function* watchFetchQuestionById() {
    yield takeEvery(FETCH_QUESTION_BY_ID, handleFetchQuestionById);
}

export function* watchFetchQuestionByIdSuccess() {
    yield takeEvery(FETCH_QUESTION_BY_ID_SUCCESS, handleFetchQuestionByIdSuccess);
}
