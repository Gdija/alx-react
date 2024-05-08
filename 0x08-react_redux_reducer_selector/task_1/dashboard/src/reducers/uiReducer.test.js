import uiReducer  from "./uiReducer";
import {DISPLAY_NOTIFICATION_DRAWER} from '../actions/uiActionTypes';
import { Map } from "immutable";

describe("uiReducer", () => {
    it ('the initial state when no action is passed', () => {
        const ReducerState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        });
        const result = uiReducer(undefined, {});
        expect(result.toJS()).toEqual(ReducerState.toJS())
    });

    it('check the state returned by uiReducer equals the reducer state when the action SELECT_COURSE is passed', () => {
        const ReducerState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        });
        const action = {type: 'SELECT_COURSE'};
        const result = uiReducer(undefined, action);
        expect(result.toJS()).toEqual(ReducerState.toJS())
    });

    it('check the state returned by uiReducer equals the reducer state when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const action = {type: DISPLAY_NOTIFICATION_DRAWER};
        const result = uiReducer(undefined, action);
        expect(result.get('isNotificationDrawerVisible')).toBe(true)
    });
})