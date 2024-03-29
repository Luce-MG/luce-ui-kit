import { ChipProps as Props } from '@material-ui/core/Chip';
import * as React from 'react';
export declare type CustomVariant = 'primary' | 'secondary' | 'officeCleaning' | 'homeCleaning' | 'airconCleaning' | 'homeBeauty' | 'percentage' | 'hourlyRate' | 'casual' | 'error' | 'assigned' | 'changed' | 'unassigned' | 'replaced' | 'unpaid' | 'paid' | 'underpaid' | 'stripeProcessing' | 'autocomplete';
export declare type SizeTags = 'xs' | 'small' | 'medium' | 'large';
export interface TagInterface {
    label?: string;
    variant?: CustomVariant;
}
export declare type TagProps = {
    customVariant?: CustomVariant;
    sizes?: SizeTags;
} & Props;
export declare const TagsChip: React.FC<TagProps>;
export default TagsChip;
