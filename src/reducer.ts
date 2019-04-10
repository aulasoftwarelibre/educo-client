import { combineReducers, Reducer } from 'redux';
import { reducer as quizReducer, State as QuizState } from './quiz/reducer';
import { reducer as statsReducer, State as StatsState } from './stats/reducer';

export const reducer: Reducer<State> = combineReducers({
    quiz: quizReducer,
    stats: statsReducer,
});

export interface State {
    readonly quiz: QuizState,
    readonly stats: StatsState,
}
