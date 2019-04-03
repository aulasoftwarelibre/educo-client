import { AnyAction } from 'redux';
import { View } from '../reducer';

export const CHANGE_VIEW: string = '@@layout/CHANGE_VIEW';

export const changeView = (view: View): AnyAction => ({
    type: CHANGE_VIEW,
    view,
});
