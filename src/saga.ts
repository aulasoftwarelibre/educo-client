import createSagaMiddleware  from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { saga as sseSaga } from './utils/sse-sagas';

export const sagaMiddleware = createSagaMiddleware();

export function* saga() {
    yield all([
        fork(sseSaga),
    ]);
}
