import { AnyAction, Reducer } from 'redux';

export const reducer: Reducer<State> = (state: State = initialState, action: AnyAction) => {
    switch(action.type) {
        default: {
            return state;
        }
    }
};

export interface State {
    readonly percentage1?: number,
    readonly percentage2?: number,
    readonly percentage3?: number,
}

const initialState: State = {
    percentage1: undefined,
    percentage2: undefined,
    percentage3: undefined,
};
