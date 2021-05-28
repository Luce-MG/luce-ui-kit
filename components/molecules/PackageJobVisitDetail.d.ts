import * as React from 'react';
export interface PackageJobVisitDetail {
    id: number;
    packageId: number;
    visitId: number;
    jobId: number;
    name: string;
    addressCode: string;
    address: string;
    phone: string;
    postalCode: number;
    contact: string;
    note?: string;
}
export declare type PackageJobVisitDetailProps = {
    detailsValues: PackageJobVisitDetail;
    onClickJobId(id: number): void;
    onClickPackageId(id: number): void;
    onClickVisitId(id: number): void;
    onClose(event: React.MouseEvent<HTMLElement>): void;
};
declare const PackageJobVisitDetail: React.FC<PackageJobVisitDetailProps>;
export default PackageJobVisitDetail;
