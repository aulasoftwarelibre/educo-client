import { AnyAction, Reducer } from 'redux';

export const reducer: Reducer<State> = (state: State = initialState, action: AnyAction) => {
    switch(action.type) {
        default: {
            return state;
        }
    }
};

export interface State {
    readonly question?: string,
    readonly answer1?: string,
    readonly answer2?: string,
    readonly answer3?: string,
}

const initialState: State = {
    question: undefined,
    answer1: undefined,
    answer2: undefined,
    answer3: undefined,
};
