import { DialogProps } from '@material-ui/core/Dialog';
import * as React from 'react';
import Icons from '../../stories/assets/icons';
import { StyledButton } from '../button/Button';
export declare type ChooseServiceModalProps = {
    title?: string;
    cancelLabel?: string;
    confirmLabel?: string;
    btnVariantConfirm?: StyledButton;
    btnVariantCancel?: StyledButton;
    onCancel(): void;
    onConfirm(): void;
    data?: {
        iconName: keyof typeof Icons;
        label: string;
    }[];
} & DialogProps;
declare const ChooseServiceModal: React.FC<ChooseServiceModalProps>;
export default ChooseServiceModal;
