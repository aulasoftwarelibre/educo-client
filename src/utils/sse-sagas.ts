import { all, call, fork, put, select, take } from 'redux-saga/effects';
import { subscribeSSE } from './subscribe-sse';
import { fetchQuestionById } from '../quiz/actions/fetch-question-by-id';
import { State } from '../reducer';

export function* saga() {
    yield all([
        fork(watchSessionSSE),
    ]);
}

export function* watchSessionSSE() {
    if (!process.env.REACT_APP_SSE_URL) {
        throw Error('SSE url is not set');
    }

    const url = new URL(process.env.REACT_APP_SSE_URL);

    url.searchParams.append(
        'topic',
        `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_SESSION_ID}`
    );

    const eventSource = new EventSource(url.href);
    const channel = yield call(subscribeSSE, eventSource);

    while(true) {
        const message = yield take(channel);
        const { activeQuestion: activeQuestionId } = JSON.parse(message.data);
        const currentQuestion = yield select(question);

        if(
            activeQuestionId && !currentQuestion ||
            activeQuestionId && activeQuestionId !== currentQuestion.id
        ) {
            yield put(fetchQuestionById(activeQuestionId));
        }
    }
}

export const question = (state: State) => state.quiz.question;
