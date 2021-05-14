import { IconButtonProps } from '@material-ui/core/IconButton';
import * as React from 'react';
export declare type CardPopoverProps = {
    direction?: 'row' | 'column';
    data: {
        label: string;
        onPress(): void;
    }[];
} & IconButtonProps;
declare const PayrollCard: React.FC<CardPopoverProps>;
export default PayrollCard;
