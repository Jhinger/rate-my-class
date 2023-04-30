import type { UntypedObject } from "@/types";

export default function completeDistribution(incomplete_distribution: any) {
    for (let i = -1; i < 12; i++) {
        if (incomplete_distribution[i] === undefined) {
            incomplete_distribution[i] = 0;
        }
    }

    return incomplete_distribution;
}