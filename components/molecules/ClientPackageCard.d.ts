import * as React from 'react';
export interface ClientPackageCard {
    assigned: string;
    schedule: string[];
}
export declare type ClientPackageCardProps = {
    data: ClientPackageCard[];
    id: number;
    status: string;
    invisible: boolean;
    pageLink: string;
};
declare const ClientPackageCards: React.FC<ClientPackageCardProps>;
export default ClientPackageCards;
