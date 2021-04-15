import * as React from 'react';
import { CleanerData } from '../molecules/CardCleaner';
export declare type StyledCleaner = {
    dataCleaner: CleanerData[];
    loading: boolean;
    onSelect: (value: CleanerData) => void;
};
export declare type CleanerSearchProps = StyledCleaner;
declare const CleanerSearch: React.FC<CleanerSearchProps>;
export default CleanerSearch;
