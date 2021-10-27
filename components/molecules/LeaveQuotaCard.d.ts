import * as React from 'react';
export declare type LeaveQuotaCardProps = {
    type: 'annual' | 'medical' | 'nonpaid' | 'hospital';
    accrued: number;
    taken: number;
    remaining: number;
};
declare const LeaveQuotaCard: React.FC<LeaveQuotaCardProps>;
export default LeaveQuotaCard;
