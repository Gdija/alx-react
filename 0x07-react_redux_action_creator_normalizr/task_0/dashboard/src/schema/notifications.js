import * as data from "../../notifications.json"

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

// const notificationFilter = data.filter(notification => data.author.id === userId)
// const notificationMap = notificationFilter.map(notification => notification.context)