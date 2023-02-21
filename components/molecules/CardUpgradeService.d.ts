import * as React from 'react';
export declare type CardUpgradeServiceProps = {
    title: string;
    subtitle: string;
    description: string;
    imgUrl: string;
    disabled?: boolean;
    isSelected: boolean;
    onClick?(): void;
};
export declare const CardUpgradeService: React.FC<CardUpgradeServiceProps>;
