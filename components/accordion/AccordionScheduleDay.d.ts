import { AccordionProps as Props } from '@material-ui/core/Accordion';
import { TypographyVariant } from '@material-ui/core/styles';
import * as React from 'react';
import { SizeTags } from '../tags/Tags';
export interface Schedule {
    day: string;
    startTime: string;
    endTime: string;
}
export declare type AccordionScheduleProps = {
    schedule: Schedule[];
    labelVariant?: TypographyVariant;
    marginBottom?: number;
    marginTop?: number;
    sizes?: SizeTags;
} & Props;
declare const AccordionSchedule: React.FC<AccordionScheduleProps>;
export default AccordionSchedule;
