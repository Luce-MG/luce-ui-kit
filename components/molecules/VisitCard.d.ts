import * as React from 'react';
import { TagInterface as Tag } from '../tags/Tags';
interface Visit {
    code: string;
    package: string;
    clientName: string;
    address: string;
}
export declare type VisitCardProps = {
    data: Visit;
    duration: number;
    tags: Tag[];
    customLayout: 'vertical' | 'horizontal';
    cardType: 'officeCleaningJobs' | 'homeCleaningJobs' | 'Annual Leave' | 'Medical Leave' | 'Recommended';
};
declare const CalendarCards: React.FC<VisitCardProps>;
export default CalendarCards;
