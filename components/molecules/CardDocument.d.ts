import * as React from 'react';
export interface DocumentInterface {
    id: number;
    name: string;
    date: string;
    author: string;
}
export declare type StyledDocCard = {
    author: DocumentInterface;
    onCLick(docId: number): void;
    onDelete(id: number): void;
    mandatory: boolean;
    hideIdAuthor: boolean;
};
export declare type CardDocProps = StyledDocCard;
declare const DocumentCard: React.FC<CardDocProps>;
export default DocumentCard;
