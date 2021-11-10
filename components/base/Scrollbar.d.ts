export declare const scrollBar: {
    overflow: string;
    transition: string;
    scrollBehavior: string;
    '&::-webkit-scrollbar': {
        opacity: number;
        width: string;
    };
    '&:hover': {
        '&::-webkit-scrollbar': {
            opacity: number;
        };
        '&::-webkit-scrollbar-track': {
            '-webkit-box-shadow': string;
        };
        '&::-webkit-scrollbar-thumb': {
            borderRadius: string;
            outline: string;
            backgroundColor: any;
        };
    };
};
