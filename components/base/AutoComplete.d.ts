import MuiAutocomplete, { AutocompleteProps as Props } from '@material-ui/lab/Autocomplete';
import useMuiAutocomplete from '@material-ui/lab/useAutocomplete';
import { AutocompleteChangeReason as MuiAutocompleteChangeReason } from '@material-ui/lab/useAutocomplete/useAutocomplete';
export declare type AutoCompleteProps<T, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined> = Props<T, Multiple, DisableClearable, FreeSolo>;
export declare type AutocompleteChangeReason = MuiAutocompleteChangeReason;
export declare const useAutocomplete: typeof useMuiAutocomplete;
export declare const Autocomplete: typeof MuiAutocomplete;
