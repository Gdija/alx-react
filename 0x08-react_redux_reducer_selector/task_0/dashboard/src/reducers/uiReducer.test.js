import uiReducer  from "./uiReducer";
import {DISPLAY_NOTIFICATION_DRAWER} from '../actions/uiActionTypes';

describe("uiReducer", () => {
    it ('the initial state when no action is passed', () => {
        const ReducerState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        };
        const result = uiReducer(undefined, {});
        expect(result).toEqual(ReducerState)
    });

    it('check the state returned by uiReducer equals the reducer state when the action SELECT_COURSE is passed', () => {
        const ReducerState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        };
        const action = {type: 'SELECT_COURSE'};
        const result = uiReducer(undefined, action);
        expect(result).toEqual(ReducerState)
    });

    it('check the state returned by uiReducer equals the reducer state when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const action = {type: DISPLAY_NOTIFICATION_DRAWER};
        const result = uiReducer(undefined, action);
        expect(result.isNotificationDrawerVisible).toBe(true)
    });
})