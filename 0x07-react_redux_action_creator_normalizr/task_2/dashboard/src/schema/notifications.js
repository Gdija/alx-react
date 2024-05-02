import * as data from "../../notifications.json"
import {normalize, schema} from 'normalizr'



const user = new schema.Entity("users");

const message = new schema.Entity("messages", {}, {
    idAttribute: "guid"
});

const notification = new schema.Entity("notifications", {
    author: user,
    context: message
});

const normalizedData = normalize(data, [notification]);

export {normalizedData};

export function getAllNotificationsByUser(userId){
    const notifications = normalizedData.entities.notifications;
    const messages = normalizedData.entities.messages; 
    const notificationContext = [];

        for(const notif in notifications ){
            if (notifications[notif].author.id === userId){
                notificationContext.push(messages[notifications[notif].context]);
        }
    }
    return notificationContext;
}