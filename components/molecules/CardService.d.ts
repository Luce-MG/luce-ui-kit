import * as React from 'react';
export declare type CardServiceProps = {
    title: string;
    subtitle?: string;
    disabled?: boolean;
    active?: boolean;
    actionButton?: React.ReactNode;
    isSelected: boolean;
    onClick?(): void;
};
export declare const CardService: React.FC<CardServiceProps>;
