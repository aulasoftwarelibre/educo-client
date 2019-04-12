import { AnyAction } from 'redux';
import { call, put } from 'redux-saga/effects';
import { fetchSessionById } from '../api/fetch-session-by-id';
import { Question } from '../reducer';
import { fetchSessionByIdFailure, fetchSessionByIdSuccess } from '../actions/fetch-session-by-id';

export function* handleFetchSessionById({}: AnyAction) {
    try {
        const { data: { activeQuestion } } = yield call(fetchSessionById);

        if(!activeQuestion) {
            yield put(fetchSessionByIdSuccess());
            return;
        }

        const question: Question = {
            id: activeQuestion['@id'],
            content: activeQuestion.content,
            open: activeQuestion.isAcceptingAnswers,
            answers: activeQuestion.answers.map((answer: any) => ({
                id: answer['@id'],
                content: answer.content,
            })),
        };

        yield put(fetchSessionByIdSuccess(question));
    } catch(error) {
        yield put(fetchSessionByIdFailure);
    }
}
