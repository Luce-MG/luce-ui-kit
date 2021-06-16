import React from 'react';
export declare type PackageJobVisitProps = {
    packageJobVisit: PackageJobVisitLinkProps;
};
export interface PackageJobVisitLinkProps {
    packageId?: string;
    jobId?: string;
    visitId?: string;
    onClickPackage?(event: React.SyntheticEvent, packageId: string): void;
    onClickJob?(event: React.SyntheticEvent, jobId: string): void;
    onClickVisit?(event: React.SyntheticEvent, visitId: string): void;
}
declare const PackageJobVisitLink: React.FC<PackageJobVisitLinkProps>;
export default PackageJobVisitLink;
