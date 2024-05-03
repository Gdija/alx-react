import { MARK_AS_READ, NotificationTypeFilters, SET_TYPE_FILTER } from "./notificationActionTypes";
import { marAsAread, setNotificationFilter } from "./notificationActionCreators";

describe('verify actions', () => {
    test('verify mark as read action', () =>{
        const expectedAction = { type: MARK_AS_READ, index: 1 };
        const result = marAsAread(1)
        expect(result).toEqual(expectedAction);
    });

    test("verify notif filter action", () => {
        const expectedAction = {type: SET_TYPE_FILTER, filter: "DEFAULT"};
        const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);
        expect(result).toEqual(expectedAction);
    });
});