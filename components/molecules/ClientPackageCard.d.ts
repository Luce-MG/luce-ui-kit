import * as React from 'react';
export interface ClientPackageCard {
    assigned: string;
    schedule: string[];
    startDate: string;
    endDate: string;
}
export declare type ClientPackageCardProps = {
    data: ClientPackageCard[];
    id: number;
    status: string;
    invisible: boolean;
    address: string;
    onViewDetailsClick(): void;
};
declare const ClientPackageCards: React.FC<ClientPackageCardProps>;
export default ClientPackageCards;
