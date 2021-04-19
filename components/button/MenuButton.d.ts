import * as React from 'react';
import { IconsProps } from '../icons/Icons';
export interface MenuButton {
    icon?: IconsProps;
    label: string;
    isExpand?: boolean;
    url?: string;
    subMenu?: MenuButton[];
}
export declare type MenuButtonsProps = {
    menus: MenuButton[];
    onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number): void;
};
declare const MenuButton: React.FC<MenuButtonsProps>;
export default MenuButton;
