import { combineReducers, Reducer } from 'redux';
import { reducer as layoutReducer, State as LayoutState } from './layout/reducer';
import { reducer as quizReducer, State as QuizState } from './quiz/reducer';
import { reducer as statsReducer, State as StatsState } from './stats/reducer';

export const reducer: Reducer<State> = combineReducers({
    layout: layoutReducer,
    quiz: quizReducer,
    stats: statsReducer,
});

export interface State {
    readonly layout: LayoutState,
    readonly quiz: QuizState,
    readonly stats: StatsState,
}
