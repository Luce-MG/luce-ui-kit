import * as React from 'react';
export interface Notification {
    id: number;
    link?: string;
    label?: string;
    date?: string;
}
export declare type CardNotificationProps = {
    notification: Notification;
    onRead(id: number): void;
    isRead: boolean;
};
declare const CardNotification: React.FC<CardNotificationProps>;
export default CardNotification;
