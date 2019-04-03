import { all, fork, takeEvery } from 'redux-saga/effects';
import { FETCH_QUESTION_BY_ID } from '../actions/fetch-question-by-id';
import { handleFetchQuestionById } from "./fetch-question-by-id";

export function* saga() {
    yield all([
        fork(watchFetchQuestionById),
    ]);
}

export function* watchFetchQuestionById() {
    yield takeEvery(FETCH_QUESTION_BY_ID, handleFetchQuestionById);
}
