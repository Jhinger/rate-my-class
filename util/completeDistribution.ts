import getGrade from "./getGrade";

export default function completeDistribution(incomplete_distribution: any) {
    let map: {[key: number]: number} = {};
    for (const grade of incomplete_distribution) {
        const numberGrade = grade.gradeRecieved as number;

        if (map[numberGrade] === undefined) {
            map[numberGrade] = grade._count;
        }
    }

    let res: {[key: number]: { name: string, value: number }} = {};
    for (let i = 11; i >= 0; i--) {
        const letterGrade = getGrade(i);
        if (map[i] === undefined) {
            res[i] = { name: letterGrade, value: 0 };
        } else {
            res[i] = { name: letterGrade, value: map[i] };
        }
    }

    return Object.values(res);
}