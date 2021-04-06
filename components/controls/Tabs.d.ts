import { TabProps as PropsTab } from '@material-ui/core/Tab';
import * as React from 'react';
export declare type TabStyled = {
    tabs: string[];
};
export declare type TabProps = PropsTab & TabStyled;
declare const Tabs: React.FC<TabProps>;
export default Tabs;
