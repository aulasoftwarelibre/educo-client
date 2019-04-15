import { combineReducers, Reducer } from 'redux';
import { reducer as quizReducer, State as QuizState } from './quiz/reducer';

export const reducer: Reducer<State> = combineReducers({
    quiz: quizReducer,
});

export interface State {
    readonly quiz: QuizState,
}
