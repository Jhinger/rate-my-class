import type { TAG } from "@prisma/client";

export default function getTagName(tag: TAG) {
    const map = {
        TEST_HEAVY: "Test Heavy",
        ASSIGNMENT_HEAVY: "Assignment Heavy",
        LECTURES_RECORDED: "Lectures Recorded",
        REQUIRED: "Required",
        AVOID: "Avoid",
        RECOMMENDED: "Recommended",
        THEORY_HEAVY: "Theory Heavy",
        READING_HEAVY: "Reading Heavy",
        GROUPWORK_HEAVY: "Groupwork Heavy",
        PARTICIPATION_MATTERS: "Participation Matters"
    }

    return map[tag];
}