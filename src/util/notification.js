import {AsyncStorage} from 'react-native';
import {Notifications, Permissions} from 'expo';
import {getDate} from '.';

const NOTIFICATION_KEY = '@flashcards:notification';

export const createNotification = () => ({
    title: 'Flashcards reminder',
    body: 'Don\'t forget to take a quiz to improve your knowledge today',
    ios: {
        sound: true
    },
    android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true
    }
});

export const setNotification = async (notification = createNotification(), futureDate = getDate()) => {
    const storedKeyRaw = await AsyncStorage.getItem(NOTIFICATION_KEY);
    const storedKey = JSON.parse(storedKeyRaw);

    console.log('Stored Key', storedKey);

    if(storedKey === null){
        const status = await askPermission(Permissions.NOTIFICATIONS);
        console.log('Permission status', status);
        if(status === 'granted'){
            await Notifications.cancelAllScheduledNotificationsAsync();
            console.log('Notifications canceled');
            await Notifications.scheduleLocalNotificationAsync(
              notification, {
                  time: futureDate,
                  repeat: 'day'
              }
            );
            console.log('Notification scheduled');
            await AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            console.log('Notification key created');
        }
    }
};

export const askPermission = async permissionType => {
    const {status} = await Permissions.askAsync(permissionType);
    return status;
};

export const clearNotification = async () => {
    console.log('Cleaning notification');
    await AsyncStorage.removeItem(NOTIFICATION_KEY);
    console.log('Notification key removed');
    await Notifications.cancelAllScheduledNotificationsAsync;
    console.log('Notifications canceled');
};


