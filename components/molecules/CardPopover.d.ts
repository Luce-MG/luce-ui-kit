import { IconButtonProps } from '@material-ui/core/IconButton';
import * as React from 'react';
export declare type CardPopoverProps = {
    data: {
        label: string;
        url: string;
    }[];
} & IconButtonProps;
declare const PayrollCard: React.FC<CardPopoverProps>;
export default PayrollCard;
