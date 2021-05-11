import * as React from 'react';
import { IconName } from '../icons/Icons';
export interface MenuButton {
    icon?: IconName;
    label: string;
    isExpand?: boolean;
    url?: string;
    subMenu?: MenuButton[];
}
export declare type MenuButtonsProps = {
    menus: MenuButton[];
    onClick?(event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number): void;
    urlOnClick?(event: React.MouseEvent<HTMLDivElement, MouseEvent>, url?: string, expand?: boolean): void;
    activeRoute?: string;
};
declare const MenuButton: React.FC<MenuButtonsProps>;
export default MenuButton;
