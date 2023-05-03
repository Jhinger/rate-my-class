
function getGrade(num: number): string {
    const map = {
        1: 'F',
        2: 'D',
        3: 'C-',
        4: 'C',
        5: 'C+',
        6: 'B-',
        7: 'B',
        8: 'B+',
        9: 'A-',
        10: 'A',
        11: 'A+'
    }

    return map[num as keyof typeof map] ?? 'Unknown';
}

function getNumberGrade(num: number = 6): number {
    const number = Math.round(num);
    const map = {
        11: 98.5,
        10: 92.5,
        9: 88.5,
        8: 82.5,
        7: 78.5,
        6: 72.5,
        5: 68.5,
        4: 62.5,
        3: 58.5,
        2: 52.5,
        1: 48.5
    }

    return map[number as keyof typeof map];
}

export {
    getGrade,
    getNumberGrade
}