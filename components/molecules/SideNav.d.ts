import { DrawerProps as Props } from '@material-ui/core/Drawer';
import * as React from 'react';
import { MenuButtonsProps } from '../button/MenuButton';
export declare type SideMenuProps = {
    toggleClick(open: boolean): void;
    linkOnClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>, url?: string, expand?: boolean): void;
    isOpen: boolean;
    logOut(): void;
} & Props & MenuButtonsProps;
declare const SideNav: React.FC<SideMenuProps>;
export default SideNav;
