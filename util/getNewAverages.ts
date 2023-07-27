
import type { Class, Department } from "@prisma/client";
import type { ICommentFormValues } from "@/types";

type ClassFields = Omit<Class, 'id' | 'schoolId' | 'name'>

function getNewClassAverages(userClass: ClassFields, userForm: ICommentFormValues): Partial<Class> {
    const newAverageGrade = 
        (userClass.avgGrade * userClass.numComments +
            userForm.gradeRecieved) /
        (userClass.numComments + 1);

    const newAverageDiff = 
        (userClass.avgDifficulty * userClass.numComments +
            userForm.difficulty) /
        (userClass.numComments + 1);

    const newAverageBooster = 
        (userClass.avgBooster * userClass.numComments +
            userForm.isGPABooster) /
        (userClass.numComments + 1);

    const newAverageWorkload = 
        (userClass.avgWorkload * userClass.numComments +
            userForm.workload) /
        (userClass.numComments + 1);

    const newAverageRecommended = 
        (userClass.avgRecommended * userClass.numComments +
            (userForm.isRecommended ? 1 : 0)) /
        (userClass.numComments + 1);

    const newAverageRating =
        (userClass.avgRating * userClass.numComments +
            userForm.overallRating) /
        (userClass.numComments + 1);

    const newNumComments = userClass.numComments + 1;

    return {
        avgGrade: +newAverageGrade.toFixed(1),
        avgDifficulty: +newAverageDiff.toFixed(1),
        avgBooster: +newAverageBooster.toFixed(1),
        avgRating: +newAverageRating.toFixed(1),
        avgWorkload: +newAverageWorkload.toFixed(1),
        avgRecommended: +newAverageRecommended.toFixed(1),
        numComments: +newNumComments.toFixed(1)
    }
}

type DepartmentFields = Pick<Department, 'avgGrade' | 'numComments'>

function getNewDepartmentAverages(userDepartment: DepartmentFields, userGradeRecieved: number): Partial<Department> {
    const newDepartmentAvg =
		(userDepartment!.avgGrade * userDepartment!.numComments +
			userGradeRecieved) /
		(userDepartment!.numComments + 1);

	const newDepartmentNumComments = userDepartment!.numComments + 1;

    return {
        avgGrade: +newDepartmentAvg.toFixed(1),
        numComments: +newDepartmentNumComments.toFixed(1)
    }
}

export {
    getNewClassAverages,
    getNewDepartmentAverages
}