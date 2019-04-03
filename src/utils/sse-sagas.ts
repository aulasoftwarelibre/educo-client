import { all, call, fork, take } from 'redux-saga/effects';
import { subscribeSSE } from './subscribe-sse';

export function* saga() {
    yield all([
        fork(watchSessionSSE),
    ]);
}

export function* watchSessionSSE() {
    const url = new URL('http://localhost:1337/hub');

    url.searchParams.append('topic', 'http://localhost:8000/api/sessions/{id}');

    const eventSource = new EventSource(url.href);
    const channel = yield call(subscribeSSE, eventSource);

    while (true) {
        const message = yield take(channel);

        console.log(message);
        console.log(message.data);
    }
}
