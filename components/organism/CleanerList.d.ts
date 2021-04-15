import * as React from 'react';
import { CleanerData } from '../molecules/CardCleaner';
import { TagInterface } from '../tags/Tags';
export declare type StyledCleanerList = {
    allCleaners: CleanerData[];
    cleaners: CleanerData[];
    tags: TagInterface[];
};
export declare type CleanerListProps = StyledCleanerList;
declare const CleanerList: React.FC<CleanerListProps>;
export default CleanerList;
