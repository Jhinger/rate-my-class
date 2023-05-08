import { Class } from "@prisma/client";

export default function getPlaceholder(classes: (Partial<Class>)[]) {
    const [first, second] = classes;
    if (first === undefined || second === undefined) return "";

    return `ex. '${first.name}' or '${second.name}'`;
}