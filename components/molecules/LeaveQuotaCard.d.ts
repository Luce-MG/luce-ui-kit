import * as React from 'react';
export declare type LeaveQuotaCardProps = {
    type: 'annual' | 'medical' | 'nonpaid' | 'hospital' | 'custom';
    accrued: number;
    taken: number;
    remaining: number;
    customTitle?: string;
};
declare const LeaveQuotaCard: React.FC<LeaveQuotaCardProps>;
export default LeaveQuotaCard;
