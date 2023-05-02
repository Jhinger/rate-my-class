
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

export type Averages = {
    avgBooster: number | null;
    avgDifficulty: number | null;
    avgGrade: number | null;
    avgRecommended: number | null;
    avgWorkload: number | null;
}

export interface DepartmentSummary {
    name: string;
    numComments: number;
    avgGrade: number;
}