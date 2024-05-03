import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";

describe("test action creator", () => {
    test("test login function", () => {
        const email = "xyz@example.com";
        const password = "wyzpass"
        const expectedAction = {type: LOGIN, user: {email, password}};
        const result = login(email, password);
        expect(result).toEqual(expectedAction);
    });

    test("test logout function", () => {
        const expectedAction = {type: LOGOUT};
        const result = logout();
        expect(result).toEqual(expectedAction);
    });

    test("test display notification function", () => {
        const expectedAction = {type: DISPLAY_NOTIFICATION_DRAWER};
        const result = displayNotificationDrawer();
        expect(result).toEqual(expectedAction);
    });

    test("test hide notification function", () => {
        const expectedAction = {type: HIDE_NOTIFICATION_DRAWER};
        const result = hideNotificationDrawer();
        expect(result).toEqual(expectedAction);
    });
})