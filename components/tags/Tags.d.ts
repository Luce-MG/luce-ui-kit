import { ChipProps as Props } from '@material-ui/core/Chip';
import * as React from 'react';
export interface TagInterface {
    label: string;
    variant: any;
}
export declare type StyledTag = {
    customVariant: 'primary' | 'secondary' | 'officeCleaning' | 'homeCleaning' | 'percentage' | 'hourlyRate' | 'casual';
    sizes: 'xs' | 'small' | 'medium' | 'large';
};
export declare type ChipProps = Props & StyledTag;
export declare const TagsChip: React.FC<ChipProps>;
export default TagsChip;
