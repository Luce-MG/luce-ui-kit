import * as React from 'react';
import { CardCleaner } from '../molecules/CardCleaner';
export declare type StyledCleaner = {
    dataCleaner: CardCleaner[];
    loading: boolean;
    onSelect: (value: CardCleaner) => void;
};
export declare type CleanerSearchProps = StyledCleaner;
declare const CleanerSearch: React.FC<CleanerSearchProps>;
export default CleanerSearch;
