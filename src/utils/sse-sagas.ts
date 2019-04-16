import { all, call, fork, put, take } from 'redux-saga/effects';
import { subscribeSSE } from './subscribe-sse';
import { fetchSessionByIdSuccess } from '../quiz/actions/fetch-session-by-id';
import { Question } from '../quiz/reducer';

export function* saga() {
    yield all([
        fork(watchSessionSSE),
    ]);
}

export function* watchSessionSSE() {
    const url = new URL(process.env.REACT_APP_SSE_URL!);

    url.searchParams.append(
        'topic',
        `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_SESSION_ID}`
    );

    const eventSource = new EventSource(url.href);
    const channel = yield call(subscribeSSE, eventSource);

    while(true) {
        const message = yield take(channel);
        const { activeQuestion, isActiveQuestionOpen } = JSON.parse(message.data);

        if(!activeQuestion) {
            yield put(fetchSessionByIdSuccess());
            continue;
        }

        const { content, duration, activatedAt, answers } = activeQuestion;

        const question: Question = {
            id: activeQuestion['@id'],
            content,
            open: isActiveQuestionOpen,
            durationSeconds: duration,
            elapsedSeconds: (Date.now() - new Date(activatedAt).getTime()) / 1000,
            answers: answers.map((answer: any) => ({
                id: answer['@id'],
                content: answer.content,
                correct: 'isCorrect' in answer ? answer.isCorrect : undefined,
                rate: 'rate' in answer ? answer.rate: undefined,
            })),
        };

        yield put(fetchSessionByIdSuccess(question));
    }
}
