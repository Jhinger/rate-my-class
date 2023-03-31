
export type PropertyKey = string | number | symbol;

export type Maybe<T> = T | null | undefined;

export type StatusOptions = "loading" | "authenticated" | "unauthenticated";

export type ValueOfType<T> = T[keyof T];

export type UntypedObject = {
    [key: PropertyKey]: any;
}

export type ChartType = "barchart" | "piechart";

export type Card = {
    title: string;
    subtext: string;
    imgSrc: string;
}

export interface DepartmentSummary {
    department: string;
    numComments: number;
    _avg: {
        avgGrade: number;
    };
}