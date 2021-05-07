import MenuItem, { MenuItemProps as MuiMenuItemProps } from '@material-ui/core/MenuItem';
import { SelectProps as Props } from '@material-ui/core/Select';
import * as React from 'react';
import { IconList } from '../icons/Icons';
export declare type SelectProps = {
    icon?: keyof typeof IconList;
} & Props;
export declare type MenuItemProps = MuiMenuItemProps;
declare const Select: React.FC<SelectProps>;
export { Select, MenuItem };
export default Select;
