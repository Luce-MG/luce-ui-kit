import { TypographyProps as Props } from '@material-ui/core/Typography';
import * as React from 'react';
export declare type BodyVariants = 'lg' | 'lgMedium' | 'lgBold' | 'mdBold' | 'smBold' | 'xsMedium' | 'xsBold' | 'xxsMedium';
export declare type StyledTypography = {
    bodyVariants?: BodyVariants;
};
export declare type TypographyProps = Props & StyledTypography;
declare const Typography: React.FC<TypographyProps>;
export default Typography;
