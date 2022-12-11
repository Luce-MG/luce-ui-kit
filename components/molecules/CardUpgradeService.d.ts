import * as React from 'react';
export declare type CardUpgradeServiceProps = {
    title: string;
    subtitle?: string;
    description?: string;
    imgUrl?: string;
    disabled?: boolean;
    active?: boolean;
    actionButton?: React.ReactNode;
    isSelected: boolean;
    onClick?(): void;
};
export declare const CardUpgradeService: React.FC<CardUpgradeServiceProps>;
