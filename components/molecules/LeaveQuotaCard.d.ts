import * as React from 'react';
export declare type LeaveQuotaCardProps = {
    type?: 'annual' | 'medical' | 'nonpaid' | 'hospital';
    accrued: number;
    taken: number;
    remaining: number;
    customTitle?: string;
    isHideAccuredLabel?: boolean;
    isHideTakenLabel?: boolean;
    isHideRemainingdLabel?: boolean;
};
declare const LeaveQuotaCard: React.FC<LeaveQuotaCardProps>;
export default LeaveQuotaCard;
