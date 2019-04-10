import { AnyAction, Reducer } from 'redux';
import { FETCH_SESSION_BY_ID_SUCCESS } from './actions/fetch-session-by-id';

export const reducer: Reducer<State> = (state: State = initialState, action: AnyAction) => {
    switch(action.type) {
        case FETCH_SESSION_BY_ID_SUCCESS: {
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
}

export interface Question {
    id: string,
    content: string,
    active: boolean,
    answers: Answer[],
}

export interface Answer {
    id: string,
    content: string,
}

const initialState: State = {
    question: undefined,
};
