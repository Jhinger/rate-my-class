import getGrade from '@/util/getGrade';
import type { DepartmentSummary } from '@/types/'

interface IDirectoryProps {
    summary: DepartmentSummary[];
}

const Directory = ({ summary }: IDirectoryProps) => {

    const renderPanels = summary.map((department, index) => 
            <div key={index} className='w-full m-4 p-4 rounded-md bg-primary flex flex-row justify-between items-center ring-2 ring-primary ring-offset-2 ring-offset-secondary hover:ring-white hover:duration-150'>
                <span className='font-extrabold ml-8'>{ department.department }</span>
                <div className='flex flex-row justify-between w-[8rem] mr-16'>
                    <span>{ getGrade(Math.ceil(department._avg.avgGrade)) ?? '-'}</span>
                    <span>{ department.numComments ?? '-'}</span>
                </div>
            </div>
    );

    return (
        <div className='flex flex-col items-center justify-start'>
            <div className='flex flex-row text-white font-extralight justify-end w-full text-sm'>
                <span>Average Grade:</span>
                <span className='mx-8'>Num Ratings:</span>
            </div>
            { renderPanels }
        </div>
    )
}

export default Directory;