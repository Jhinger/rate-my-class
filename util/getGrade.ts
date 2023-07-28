function getGrade(num: number): string {
	const map = {
		1: "F",
		2: "D",
		3: "C-",
		4: "C",
		5: "C+",
		6: "B-",
		7: "B",
		8: "B+",
		9: "A-",
		10: "A",
		11: "A+",
	};

	return map[num as keyof typeof map] ?? "Unknown";
}

function getNumberGrade(num: number): number {
	if (num === 0) return 0;
	
	return ((num + 9) / 20) * 100;
}

export { getGrade, getNumberGrade };
