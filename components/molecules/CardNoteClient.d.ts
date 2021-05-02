import * as React from 'react';
export interface CardNoteClientData {
    id: number;
    author?: string;
    description?: string;
    date?: string;
}
export declare type CardNoteClientProps = {
    note: CardNoteClientData;
    isEdit: boolean;
    onDelete(id: number): void;
    onEdit(id: number): void;
    onCancel(id: number): void;
    onSave(id: number): void;
};
declare const NoteClientCard: React.FC<CardNoteClientProps>;
export default NoteClientCard;
