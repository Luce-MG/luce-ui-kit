import * as React from 'react';
import { AutoCompleteProps } from '../base/AutoComplete';
export interface SkillSetData {
    label: string;
    value: string;
}
export interface SkillSetAutoCompleteProps extends Omit<AutoCompleteProps<SkillSetData, true, true, undefined>, 'options' | 'renderInput'> {
    dataSkillSets: SkillSetData[];
}
export declare const SkillSetAutoComplete: React.FC<SkillSetAutoCompleteProps>;
