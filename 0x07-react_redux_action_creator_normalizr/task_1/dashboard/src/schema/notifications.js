import * as data from "../../notifications.json"
import {normalize, schema} from 'normalizr'

export function getAllNotificationsByUser(userId){
    const notificationContext = []
        for( const i = 0; i < data.length; i++){
            const notificationData = data[i]
            if (data.author.id === userId){
                notificationContext.push(notificationData.context)
        }
    }
    return notificationContext;
}
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