import { TabProps as PropsTab } from '@material-ui/core/Tab';
import * as React from 'react';
export declare type TabProps = {
    tabs: string[];
    setSelected: (value: number) => void;
} & PropsTab;
declare const Tabs: React.FC<TabProps>;
export default Tabs;
