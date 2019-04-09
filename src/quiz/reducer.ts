import { AnyAction, Reducer } from 'redux';
import { FETCH_ANSWERS_BY_QUESTION_ID_SUCCESS } from './actions/fetch-answers-by-question-id';
import { FETCH_QUESTION_BY_ID_SUCCESS } from './actions/fetch-question-by-id';
import { CHANGE_QUESTION } from './actions/change-question';

export const reducer: Reducer<State> = (state: State = initialState, action: AnyAction) => {
    switch(action.type) {
        case CHANGE_QUESTION: {
            return {
                ...state,
                question: action.question,
            };
        }
        case FETCH_ANSWERS_BY_QUESTION_ID_SUCCESS: {
            return {
                ...state,
                answers: action.answers,
            };
        }
        case FETCH_QUESTION_BY_ID_SUCCESS: {
            return {
                ...state,
                question: action.question,
            };
        }
        default: {
            return state;
        }
    }
};

export interface State {
    readonly question?: Question,
    readonly answers?: Answer[],
}

export interface Question {
    id: string,
    content: string,
}

export interface Answer {
    id: string,
    content: string,
}

const initialState: State = {
    question: undefined,
    answers: undefined,
};
