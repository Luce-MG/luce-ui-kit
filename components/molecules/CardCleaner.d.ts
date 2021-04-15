import * as React from 'react';
import { TagInterface as Tag } from '../tags/Tags';
export interface CleanerData {
    id: number;
    name: string;
    rating: number;
    imgUrl?: string;
    beforeTime: string;
    afterTime: string;
    beforeAfterLabel: boolean;
}
export declare type CardCleanerProps = {
    cleanerData: CleanerData;
    tags: Tag[];
    onClick(cleanerId: number): void;
    isSelected: boolean;
};
declare const CardCleaner: React.FC<CardCleanerProps>;
export default CardCleaner;
