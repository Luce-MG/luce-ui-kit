import * as React from 'react';
import { PackageJobVisitProps } from '../button/PackageJobVisitLink';
export interface PackageJobVisitDetail {
    name: string;
    addressCode: string;
    address: string;
    phone: string;
    postalCode: string;
    contact: string;
    note?: string;
}
export declare type PackageJobVisitDetailProps = {
    detailsValues: PackageJobVisitDetail;
    onClose(event: React.MouseEvent<HTMLElement>): void;
} & PackageJobVisitProps;
declare const PackageJobVisitDetail: React.FC<PackageJobVisitDetailProps>;
export default PackageJobVisitDetail;
