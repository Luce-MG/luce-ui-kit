import * as React from 'react';
import { CardCleaner } from '../molecules/CardCleaner';
import { TagInterface } from '../tags/Tags';
export declare type StyledCleanerList = {
    allCleaners: CardCleaner[];
    cleaners: CardCleaner[];
    tags: TagInterface[];
};
export declare type CleanerListProps = StyledCleanerList;
declare const CleanerList: React.FC<CleanerListProps>;
export default CleanerList;
