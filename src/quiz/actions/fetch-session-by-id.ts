import { AnyAction } from 'redux';

export const FETCH_SESSION_BY_ID: string = '@@quiz/FETCH_SESSION_BY_ID';
export const FETCH_SESSION_BY_ID_SUCCESS: string = '@@quiz/FETCH_SESSION_BY_ID_SUCCESS';
export const FETCH_SESSION_BY_ID_FAILURE: string = '@@quiz/FETCH_SESSION_BY_ID_FAILURE';

export const fetchSessionById: AnyAction = ({
    type: FETCH_SESSION_BY_ID,
});

export const fetchSessionByIdSuccess: AnyAction = ({
    type: FETCH_SESSION_BY_ID_SUCCESS,
});

export const fetchSessionByIdFailure: AnyAction = ({
    type: FETCH_SESSION_BY_ID_FAILURE,
});
