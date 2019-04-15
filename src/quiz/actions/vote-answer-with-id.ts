import { AnyAction } from 'redux';

export const VOTE_ANSWER_WITH_ID: string = '@@quiz/VOTE_ANSWER_WITH_ID';
export const VOTE_ANSWER_WITH_ID_SUCCESS: string = '@@quiz/VOTE_ANSWER_WITH_ID_SUCCESS';
export const VOTE_ANSWER_WITH_ID_FAILURE: string = '@@quiz/VOTE_ANSWER_WITH_ID_FAILURE';

export const voteAnswerWithId = (id: string): AnyAction => ({
    type: VOTE_ANSWER_WITH_ID,
    id,
});

export const voteAnswerWithIdSuccess: AnyAction = ({
    type: VOTE_ANSWER_WITH_ID_SUCCESS,
});

export const voteAnswerWithIdFailure: AnyAction = ({
    type: VOTE_ANSWER_WITH_ID_FAILURE,
});
