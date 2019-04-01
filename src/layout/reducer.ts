import { AnyAction, Reducer } from 'redux';

export const reducer: Reducer<State> = (state: State = initialState, action: AnyAction) => {
    switch(action.type) {
        default: {
            return state;
        }
    }
};

export interface State {
    readonly view: View,
}

export type View = 'waiting';

const initialState: State = {
    view: 'waiting',
};
