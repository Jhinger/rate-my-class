import type { DELIVERY } from "@prisma/client";

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

export interface ICommentFormValues {
    delivery: DELIVERY;
    teacher: string;
    overallRating: number;
    difficulty: number;
    workload: number;
    isRecommended: boolean;
    tags: string[];
}