import { AnyAction } from 'redux';
import { Question } from '../reducer';

export const FETCH_QUESTION_BY_ID: string = '@@quiz/FETCH_QUESTION_BY_ID';
export const FETCH_QUESTION_BY_ID_SUCCESS: string = '@@quiz/FETCH_QUESTION_BY_ID_SUCCESS';
export const FETCH_QUESTION_BY_ID_FAILURE: string = '@@quiz/FETCH_QUESTION_BY_ID_FAILURE';

export const fetchQuestionById = (id: string): AnyAction => ({
    type: FETCH_QUESTION_BY_ID,
    id,
});

export const fetchQuestionByIdSuccess = (question: Question): AnyAction => ({
    type: FETCH_QUESTION_BY_ID_SUCCESS,
    question,
});

export const fetchQuestionByIdFailure: AnyAction = ({
    type: FETCH_QUESTION_BY_ID_FAILURE,
});