import { all, fork, takeEvery } from 'redux-saga/effects';
import { FETCH_SESSION_BY_ID } from '../actions/fetch-session-by-id';
import { handleFetchSessionById } from './fetch-session-by-id';
import { VOTE_ANSWER_WITH_ID } from '../actions/vote-answer-with-id';
import { handleVoteAnswerWithId } from './vote-answer-with-id';

export function* saga() {
    yield all([
        fork(watchFetchSessionById),
        fork(watchVoteAnswerWithId),
    ]);
}

export function* watchFetchSessionById() {
    yield takeEvery(FETCH_SESSION_BY_ID, handleFetchSessionById);
}

export function* watchVoteAnswerWithId() {
    yield takeEvery(VOTE_ANSWER_WITH_ID, handleVoteAnswerWithId);
}
