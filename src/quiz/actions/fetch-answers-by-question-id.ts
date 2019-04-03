import { AnyAction } from 'redux';
import { Answer } from '../reducer';

export const FETCH_ANSWERS_BY_QUESTION_ID: string = '@@quiz/FETCH_ANSWERS_BY_QUESTION_ID';
export const FETCH_ANSWERS_BY_QUESTION_ID_SUCCESS: string = '@@quiz/FETCH_ANSWERS_BY_QUESTION_ID_SUCCESS';
export const FETCH_ANSWERS_BY_QUESTION_ID_FAILURE: string = '@@quiz/FETCH_ANSWERS_BY_QUESTION_ID_FAILURE';

export const fetchAnswersByQuestionId = (id: string): AnyAction => ({
    type: FETCH_ANSWERS_BY_QUESTION_ID,
    id,
});

export const fetchAnswersByQuestionIdSuccess = (answer1: Answer, answer2: Answer, answer3: Answer): AnyAction => ({
    type: FETCH_ANSWERS_BY_QUESTION_ID_SUCCESS,
    answer1,
    answer2,
    answer3,
});

export const fetchAnswersByQuestionIdFailure: AnyAction = ({
    type: FETCH_ANSWERS_BY_QUESTION_ID_FAILURE,
});