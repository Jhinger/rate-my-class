import type { UntypedObject } from "@/types";

export default function isEmpty(obj: UntypedObject) {
    return Object.keys(obj).length === 0;
};