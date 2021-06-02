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
    onViewDetailsClick(): void;
};
declare const ClientPackageCards: React.FC<ClientPackageCardProps>;
export default ClientPackageCards;
