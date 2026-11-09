import React from 'react';
import { DashboardReport } from '../../lib/dashboard';
export interface DashboardHubProps {
    title?: string;
    subtitle?: string;
    reports: DashboardReport[];
    categories: string[];
    onOpen(path: string): void;
    favorites?: string[];
    onToggleFavorite?(key: string, favorite: boolean): void;
}
export declare const DashboardHub: React.FC<DashboardHubProps>;
export default DashboardHub;
