import * as React from 'react';
export declare type ClientContractCardProps = {
    name: string;
    startDate: string;
    totalPackage: number;
    isSelected: boolean;
    onClick(): void;
};
declare const ClientContractCard: React.FC<ClientContractCardProps>;
export default ClientContractCard;
