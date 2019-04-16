import { AnyAction } from 'redux';
import { call, put } from 'redux-saga/effects';
import { fetchSessionById } from '../api/fetch-session-by-id';
import { Question } from '../reducer';
import { fetchSessionByIdFailure, fetchSessionByIdSuccess } from '../actions/fetch-session-by-id';

export function* handleFetchSessionById({}: AnyAction) {
    try {
        const { data: { activeQuestion, isActiveQuestionOpen } } = yield call(fetchSessionById);

        if(!activeQuestion) {
            yield put(fetchSessionByIdSuccess());
            return;
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
    } catch(error) {
        yield put(fetchSessionByIdFailure);
    }
}
