import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

export const marAsAread = (index) => {
    return{
        type: MARK_AS_READ,
        index,
    };
};
export const boundMarkasAread = (index) => dispatch(marAsAread(index));


export const setNotificationFilter = (filter) => {
    return{
        type: SET_TYPE_FILTER,
        filter,
    };
};
export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));
