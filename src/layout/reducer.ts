import { AnyAction, Reducer } from 'redux';
import { CHANGE_VIEW } from './actions/change-view';

export const reducer: Reducer<State> = (state: State = initialState, action: AnyAction) => {
    switch(action.type) {
        case CHANGE_VIEW: {
            return {
                ...state,
                view: action.view,
            };
        }
        default: {
            return state;
        }
    }
};

export interface State {
    readonly view?: View,
}

export type View = 'waiting' | 'question' | 'stats' | undefined;

const initialState: State = {
    view: undefined,
};
