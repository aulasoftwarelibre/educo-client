import { AnyAction, Reducer } from 'redux';
import { FETCH_ANSWERS_BY_QUESTION_ID_SUCCESS } from './actions/fetch-answers-by-question-id';
import { FETCH_QUESTION_BY_ID_SUCCESS } from './actions/fetch-question-by-id';

export const reducer: Reducer<State> = (state: State = initialState, action: AnyAction) => {
    switch(action.type) {
        case FETCH_ANSWERS_BY_QUESTION_ID_SUCCESS: {
            return {
                ...state,
                answer1: action.answer1,
                answer2: action.answer2,
                answer3: action.answer3,
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
    readonly answer1?: Answer,
    readonly answer2?: Answer,
    readonly answer3?: Answer,
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
    answer1: undefined,
    answer2: undefined,
    answer3: undefined,
};
