import { SelectProps as Props } from '@material-ui/core/Select';
import * as React from 'react';
import { IconList } from '../icons/Icons';
export declare type SelectProps = {
    icon?: keyof typeof IconList;
} & Props;
declare const Select: React.FC<SelectProps>;
export default Select;
