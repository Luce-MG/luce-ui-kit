import { PopperProps as Props } from '@material-ui/core/Popper';
import * as React from 'react';
export interface VisitDetail {
    id: number;
    jobId: number;
    name: string;
    addressCode: string;
    address: string;
    phone: number;
    postalCode: number;
    contact: string;
    note?: string;
}
export declare type VisitDetailProps = {
    details: VisitDetail;
    children: React.ReactNode;
    onClickJobId(id: number): void;
    onClickDetail(id: number): void;
} & Props;
declare const CardVisitDetail: React.FC<VisitDetailProps>;
export default CardVisitDetail;
