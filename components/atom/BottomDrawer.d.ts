import React from 'react';
export declare type BottomDrawerProps = {
    title?: string;
    children: React.ReactNode;
    open?: boolean;
    onOpen: React.ReactEventHandler;
    onClose: React.ReactEventHandler;
    style?: React.CSSProperties;
};
export declare const BottomDrawer: React.FC<BottomDrawerProps>;
