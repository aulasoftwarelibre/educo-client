import { AnyAction, Reducer } from 'redux';
import { CHANGE_QUESTION } from './actions/change-question';
import { CHANGE_ANSWERS } from './actions/change-answers';

export const reducer: Reducer<State> = (state: State = initialState, action: AnyAction) => {
    switch(action.type) {
        case CHANGE_QUESTION: {
            return {
                ...state,
                question: action.question,
            };
        }
        case CHANGE_ANSWERS: {
            return {
                ...state,
                answers: action.answers,
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
