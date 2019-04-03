import { AnyAction, Reducer } from 'redux';
import { FETCH_QUESTION_BY_ID_SUCCESS } from './actions/fetch-question-by-id';

export const reducer: Reducer<State> = (state: State = initialState, action: AnyAction) => {
    switch(action.type) {
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
    readonly answer1?: string,
    readonly answer2?: string,
    readonly answer3?: string,
}

export interface Question {
    id: string,
    content: string,
}

const initialState: State = {
    question: undefined,
    answer1: undefined,
    answer2: undefined,
    answer3: undefined,
};
