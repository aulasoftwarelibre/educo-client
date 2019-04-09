import { all, fork, takeEvery } from 'redux-saga/effects';
import { FETCH_SESSION_BY_ID } from '../actions/fetch-session-by-id';
import { handleFetchSessionById } from './fetch-session-by-id';

export function* saga() {
    yield all([
        fork(watchFetchSessionById),
    ]);
}

export function* watchFetchSessionById() {
    yield takeEvery(FETCH_SESSION_BY_ID, handleFetchSessionById);
}
