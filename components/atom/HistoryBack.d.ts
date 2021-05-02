import * as React from 'react';
import { BoxProps } from '../base/Box';
import { TypographyProps } from '../base/Typography';
import { IconButtonProps } from '../button/IconButton';
export declare type HistoryBackProps = {
    goBack?(): void;
    label?: string;
    space?: number;
} & IconButtonProps & TypographyProps & BoxProps;
declare const HistoryBack: React.FC<HistoryBackProps>;
export default HistoryBack;
