
export default function getGrade(num: number): string {
    const map = {
        '-1': 'Unknown',
        1: 'A+',
        2: 'A',
        3: 'A-',
        4: 'B+',
        5: 'B',
        6: 'B-',
        7: 'C+',
        8: 'C',
        9: 'C-',
        10: 'D',
        11: 'F'
    }

    return map[num as keyof typeof map];
}