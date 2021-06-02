import * as React from 'react';
export declare type PayrollCardProps = {
    id: number;
    month: string;
    year: string;
    amount: number;
    menuPopover: {
        label: string;
        onPress(): void;
    }[];
};
declare const PayrollCard: React.FC<PayrollCardProps>;
export default PayrollCard;
