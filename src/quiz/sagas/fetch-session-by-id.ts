import { AnyAction } from 'redux';
import { call, put } from 'redux-saga/effects';
import { fetchSessionById } from '../api/fetch-session-by-id';
import { Answer, Question } from '../reducer';
import { changeQuestion } from '../actions/change-question';
import { changeAnswers } from '../actions/change-answers';
import { changeView } from '../../layout/actions/change-view';
import { fetchSessionByIdFailure, fetchSessionByIdSuccess } from '../actions/fetch-session-by-id';

export function* handleFetchSessionById({}: AnyAction) {
    try {
        const { data: { activeQuestion } } = yield call(fetchSessionById);

        if(!activeQuestion) {
            yield put(fetchSessionByIdSuccess);
            return;
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
            yield put(fetchSessionByIdSuccess);
            return;
        }

        yield put(changeView('stats'));
        yield put(fetchSessionByIdSuccess);
    } catch(error) {
        yield put(fetchSessionByIdFailure);
    }
}