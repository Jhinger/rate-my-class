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
		PARTICIPATION_MATTERS: "Participation Matters",
		GRADE_SCALED: "Grade Scaled",
		GRADE_CURVED: "Grade Curved",
		TOUGH_GRADING: "Tough Grading",
		USEFUL: "Useful",
		NO_FINALS: "No Finals",
		QUIZZES: "Quizzes",
		INTERESTING: "Interesting",
	};

	return map[tag as keyof typeof map];
}
