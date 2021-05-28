import { AccordionProps as Props } from '@material-ui/core/Accordion';
import MuiAccordionActions, { AccordionActionsProps as PropsAccordionActions } from '@material-ui/core/AccordionActions';
import MuiAccordionDetails, { AccordionDetailsProps as PropsAccordionDetails } from '@material-ui/core/AccordionDetails';
import { AccordionSummaryProps as PropsAccordionSummary } from '@material-ui/core/AccordionSummary';
import * as React from 'react';
export declare type AccordionProps = {
    title?: string;
    content?: React.ReactNode;
} & Props & PropsAccordionSummary;
export declare type AccordionDetailsProps = PropsAccordionDetails;
export declare type AccordionActionsProps = PropsAccordionActions;
export declare const AccordionDetails: typeof MuiAccordionDetails;
export declare const AccordionActions: typeof MuiAccordionActions;
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
