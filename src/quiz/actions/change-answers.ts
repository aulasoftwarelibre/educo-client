import { AnyAction } from 'redux';
import { Answer } from '../reducer';

export const CHANGE_ANSWERS: string = '@@quiz/CHANGE_ANSWERS';

export const changeAnswers = (answers: Answer[]): AnyAction => ({
    type: CHANGE_ANSWERS,
    answers,
});
