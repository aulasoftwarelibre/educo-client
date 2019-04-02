import { combineReducers, Reducer } from 'redux';
import { reducer as layoutReducer, State as LayoutState } from './layout/reducer';
import { reducer as quizReducer, State as QuizState } from './quiz/reducer';

export const reducer: Reducer<State> = combineReducers({
    layout: layoutReducer,
    quiz: quizReducer,
});

export interface State {
    readonly layout: LayoutState,
    readonly quiz: QuizState,
}
