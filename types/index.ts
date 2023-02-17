
export type PropertyKey = string | number | symbol;

export type Maybe<T> = T | null | undefined;

export type StatusOptions = "loading" | "authenticated" | "unauthenticated";

export type ValueOfType<T> = T[keyof T];

export type UntypedObject = {
    [key: PropertyKey]: any;
}

export type ChartType = "barchart" | "piechar";