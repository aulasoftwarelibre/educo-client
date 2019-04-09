import { all, fork, takeEvery } from 'redux-saga/effects';
import { FETCH_QUESTION_BY_ID, FETCH_QUESTION_BY_ID_SUCCESS } from '../actions/fetch-question-by-id';
import { handleFetchQuestionById, handleFetchQuestionByIdSuccess } from './fetch-question-by-id';
import { FETCH_ANSWERS_BY_QUESTION_ID_SUCCESS } from '../actions/fetch-answers-by-question-id';
import { handleFetchAnswersByQuestionIdSuccess } from './fetch-answers-by-question-id';
import { FETCH_SESSION_BY_ID } from '../actions/fetch-session-by-id';
import { handleFetchSessionById } from './fetch-session-by-id';

export function* saga() {
    yield all([
        fork(watchFetchQuestionById),
        fork(watchFetchQuestionByIdSuccess),
        fork(watchFetchAnswersByQuestionIdSuccess),
        fork(watchFetchSessionById),
    ]);
}

export function* watchFetchQuestionById() {
    yield takeEvery(FETCH_QUESTION_BY_ID, handleFetchQuestionById);
}

export function* watchFetchQuestionByIdSuccess() {
    yield takeEvery(FETCH_QUESTION_BY_ID_SUCCESS, handleFetchQuestionByIdSuccess);
}

export function* watchFetchAnswersByQuestionIdSuccess() {
    yield takeEvery(FETCH_ANSWERS_BY_QUESTION_ID_SUCCESS, handleFetchAnswersByQuestionIdSuccess);
}

export function* watchFetchSessionById() {
    yield takeEvery(FETCH_SESSION_BY_ID, handleFetchSessionById);
}
