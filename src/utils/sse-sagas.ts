import { all, call, fork, put, take } from 'redux-saga/effects';
import { subscribeSSE } from './subscribe-sse';
import { changeView } from '../layout/actions/change-view';
import { Answer, Question } from '../quiz/reducer';
import { changeQuestion } from '../quiz/actions/change-question';
import { changeAnswers } from '../quiz/actions/change-answers';

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
        const { activeQuestion } = JSON.parse(message.data);

        if(!activeQuestion) {
            yield put(changeView('waiting'));
            continue;
        }

        const question: Question = {
            id: activeQuestion['@id'],
            content: activeQuestion.content,
        };
        const answers: Answer[] = activeQuestion.answers.map((answer: any) => ({
            id: answer['@id'],
            content: answer.content,
        }));

        yield put(changeQuestion(question));
        yield put(changeAnswers(answers));

        if(activeQuestion.isAcceptingAnswers) {
            yield put(changeView('question'));
            continue;
        }

        yield put(changeView('stats'));
    }
}
