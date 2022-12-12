import { AutocompleteProps as Props } from '@material-ui/lab/Autocomplete';
import useMuiAutocomplete from '@material-ui/lab/useAutocomplete';
import { AutocompleteChangeReason as MuiAutocompleteChangeReason } from '@material-ui/lab/useAutocomplete/useAutocomplete';
import React from 'react';
export declare type AutoCompleteProps<T> = Props<T, boolean | undefined, boolean | undefined, boolean | undefined>;
export declare type AutocompleteChangeReason = MuiAutocompleteChangeReason;
export declare const useAutocomplete: typeof useMuiAutocomplete;
export declare const Autocomplete: <T extends unknown>(props: React.PropsWithChildren<AutoCompleteProps<T>>) => JSX.Element;
