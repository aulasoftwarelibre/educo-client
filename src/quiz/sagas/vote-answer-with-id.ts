import { AnyAction } from 'redux';
import { call, put } from 'redux-saga/effects';
import { voteAnswerWithId } from '../api/vote-answer-with-id';
import { voteAnswerWithIdFailure, voteAnswerWithIdSuccess } from '../actions/vote-answer-with-id';

export function* handleVoteAnswerWithId({ id }: AnyAction) {
    try {
        const { status } = yield call(voteAnswerWithId, id);

        if(status === 204) {
            yield put(voteAnswerWithIdSuccess);
            return;
        }

        yield put(voteAnswerWithIdFailure);
    } catch(error) {
        yield put(voteAnswerWithIdFailure);
    }
}
