import { combineReducers, Reducer } from 'redux';
import { reducer as layoutReducer, State as LayoutState } from './layout/reducer';

export const reducer: Reducer<State> = combineReducers({
    layout: layoutReducer,
});

export interface State {
    readonly layout: LayoutState,
}
