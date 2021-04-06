import * as React from 'react';
import { TagInterface as Tag } from '../tags/Tags';
export interface CardCleaner {
    id: number;
    name: string;
    rating: number;
    imgUrl?: string;
    beforeTime: string;
    afterTime: string;
    beforeAfterLabel: boolean;
}
export declare type StyledCardCleaner = {
    cleanerData: CardCleaner;
    tags: Tag[];
    onClick(cleanerId: number): void;
    isSelected: boolean;
};
export declare type CardCleanerProps = StyledCardCleaner;
declare const CardCleaner: React.FC<CardCleanerProps>;
export default CardCleaner;
