import * as React from 'react';
import { AutoCompleteProps } from '../base/AutoComplete';
export interface SkillSetData {
    label: string;
    value: string;
}
export interface SkillSetAutoCompleteProps extends AutoCompleteProps<SkillSetData> {
    dataSkillSets: SkillSetData[];
}
export declare const SkillSetAutoComplete: React.FC<SkillSetAutoCompleteProps>;
