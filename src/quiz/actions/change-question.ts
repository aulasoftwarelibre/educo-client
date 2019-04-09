import { AnyAction } from 'redux';
import { Question } from '../reducer';

export const CHANGE_QUESTION: string = '@@quiz/CHANGE_QUESTION';

export const changeQuestion = (question: Question): AnyAction => ({
    type: CHANGE_QUESTION,
    question,
});
