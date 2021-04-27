import { BreadcrumbsProps as Props } from '@material-ui/core/Breadcrumbs';
import * as React from 'react';
export declare type BreadcrumbsProps = {
    links?: {
        label: string;
        url: string;
    }[];
} & Props;
declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
export default Breadcrumbs;
