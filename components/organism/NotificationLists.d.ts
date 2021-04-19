import * as React from 'react';
import { Notification } from '../molecules/CardNotification';
export declare type NotificationListsProps = {
    notifications: Notification[];
    allIsRead: boolean;
};
declare const NotificationLists: React.FC<NotificationListsProps>;
export default NotificationLists;
