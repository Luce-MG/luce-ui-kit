import * as React from 'react';
import { TypographyProps } from '../base/Typography';
export declare type HistoryBackProps = {
    goBack?(): void;
    label?: string;
    space?: number;
    buttonIconSize?: 'small' | 'medium' | 'large';
    buttonSize?: 'small' | 'medium';
} & TypographyProps;
declare const HistoryBack: React.FC<HistoryBackProps>;
export default HistoryBack;
