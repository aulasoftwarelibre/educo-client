import { AnyAction, Reducer } from 'redux';
import { FETCH_SESSION_BY_ID_SUCCESS } from './actions/fetch-session-by-id';
import { VOTE_ANSWER_WITH_ID } from './actions/vote-answer-with-id';

export const reducer: Reducer<State> = (state: State = initialState, action: AnyAction) => {
    switch(action.type) {
        case FETCH_SESSION_BY_ID_SUCCESS: {
            return {
                ...state,
                question: action.question,
            };
        }
        case VOTE_ANSWER_WITH_ID: {
            return {
                ...state,
                votedAnswer: state.question.answers.find(({ id }) => id === action.id),
            };
        }
        default: {
            return state;
        }
    }
};

export interface State {
    readonly question?: Question,
    readonly votedAnswer?: Answer,
}

export interface Question {
    id: string,
    content: string,
    open: boolean,
    durationSeconds: number,
    elapsedSeconds: number,
    answers: Answer[],
}

export interface Answer {
    id: string,
    content: string,
    correct?: boolean,
    rate?: number,
}

const initialState: State = {
    question: undefined,
    votedAnswer: undefined,
};
