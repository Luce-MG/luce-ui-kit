import React from 'react';
import { DashboardAggregate } from '../../lib/dashboard';
export interface DashboardTotalsProps {
    totals: DashboardAggregate[];
}
export declare const DashboardTotals: React.FC<DashboardTotalsProps>;
export default DashboardTotals;
