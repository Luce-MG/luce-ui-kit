import { AutocompleteProps as Props } from '@material-ui/lab/Autocomplete';
import React from 'react';
export declare type AutoCompleteProps<T> = Props<T, boolean | undefined, boolean | undefined, boolean | undefined>;
export declare const Autocomplete: <T extends unknown>(props: React.PropsWithChildren<AutoCompleteProps<T>>) => JSX.Element;
