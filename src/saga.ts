import createSagaMiddleware  from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

export const sagaMiddleware = createSagaMiddleware();

export function* saga() {
    yield all([]);
}
