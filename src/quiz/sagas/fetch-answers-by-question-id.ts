import { AnyAction } from 'redux';
import { put } from 'redux-saga/effects';
import { changeView } from '../../layout/actions/change-view';

export function* handleFetchAnswersByQuestionIdSuccess({}: AnyAction) {
    yield put(changeView('question'));
}
