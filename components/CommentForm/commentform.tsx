import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { onSubmit } from './actions'; 
import * as z from 'zod';

import { 
    CommentCreatetagsInputObjectSchema, 
    DELIVERYSchema, 
    TAGSchema 
} from '@/prisma/generated/schemas';

interface ICommentFormProps {
    className?: string;
}

const CommentSchema = z
    .object({
        difficulty: z.number(),
        isRecommended: z.boolean(),
        workload: z.number(),
        teacher: z.string().optional().nullable(),
        isGPABooster: z.number(),
        overallRating: z.number(),
        tags: z
            .union([
                z.lazy(() => CommentCreatetagsInputObjectSchema),
                z.lazy(() => TAGSchema).array(),
            ])
            .optional(),
        delivery: z.lazy(() => DELIVERYSchema),
        gradeRecieved: z.number(),
        primaryText: z.string().optional(),
        secondaryText: z.string().optional().nullable()
    }).strict();

const CommentForm = ({ className }: ICommentFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(CommentSchema)
    });

    return (
        <div className="w-[60rem] h-full flex justify-center items-center border-2 border-solid border-red-500">
            <form className="flex flex-col flex-wrap justify-center items-center w-max h-max text-sm">
                <div className='flex flex-col justify-center items-center my-4'>
                    <label>Delivery:</label>
                    <div className='flex flex-row'>
                        <div className='m-2'>
                            <input type="radio" id='classDeliveryInPerson' name='classDelivery' value="INPERSON" className='hidden peer' defaultChecked/>
                            <label htmlFor="classDeliveryInPerson" className='bg-primary rounded-sm py-2 px-4 peer-checked:bg-primaryAccent duration-100'>In Person</label>
                        </div>
                        <div className='m-2'>
                            <input type="radio" id='classDeliveryOnline' name='classDelivery' value="ONLINE" className='hidden peer'/>
                            <label htmlFor="classDeliveryOnline" className='bg-primary rounded-sm py-2 px-4 peer-checked:bg-primaryAccent duration-100'>Online</label>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center mb-4'>
                    <label htmlFor="teacher">Teacher:</label>
                    <input type="text" id='teacher' name='teacher'/>
                </div>

                <div className='flex flex-col mb-4 justify-center items-center bg-white w-max rounded-md py-5 px-20'>
                    <label className='mb-2 text-xs'>Overall Rating:</label>
                    <div className='flex flex-row-reverse gap-3'>
                        <input type="radio" id='overallRatingFive' name='overallRating' value={5} className="hidden peer peer/rating"/>
                        <label htmlFor="overallRatingFive" className='peer-checked:bg-green-500 peer-checked/rating:ring-2 peer-checked/rating:ring-green-700 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer'>5</label>

                        <input type="radio" id='overallRatingFour' name='overallRating' value={4} className="hidden peer peer/rating" />
                        <label htmlFor="overallRatingFour" className='peer-checked:bg-green-400 peer-checked/rating:ring-2 peer-checked/rating:ring-green-600 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer'>4</label>

                        <input type="radio" id='overallRatingThree' name='overallRating' value={3} className="hidden peer peer/rating" />
                        <label htmlFor="overallRatingThree" className='peer-checked:bg-green-300 peer-checked/rating:ring-2 peer-checked/rating:ring-green-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer'>3</label>

                        <input type="radio" id='overallRatingTwo' name='overallRating' value={2} className="hidden peer peer/rating" />
                        <label htmlFor="overallRatingTwo" className='peer-checked:bg-green-200 peer-checked/rating:ring-2 peer-checked/rating:ring-green-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer'>2</label>

                        <input type="radio" id='overallRatingOne' name='overallRating' value={1} className="hidden peer peer/rating" />
                        <label htmlFor="overallRatingOne" className='peer-checked:bg-green-100 peer-checked/rating:ring-2 peer-checked/rating:ring-green-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer'>1</label>
                    </div>    
                </div>
                                
                <div className='flex flex-col mb-4 justify-center items-center bg-white w-max rounded-md py-5 px-20'>
                    <label className='mb-2 text-xs'>Difficulty:</label>
                    <div className='flex flex-row-reverse gap-3'>
                        <input type="radio" id='difficultyFive' name='difficulty' value={5} className="hidden peer peer/difficulty"/>
                        <label htmlFor="difficultyFive" className='peer-checked:bg-rose-500 peer-checked/difficulty:ring-2 peer-checked/difficulty:ring-rose-700 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer'>5</label>

                        <input type="radio" id='difficultyFour' name='difficulty' value={4} className="hidden peer peer/difficulty" />
                        <label htmlFor="difficultyFour" className='peer-checked:bg-rose-400 peer-checked/difficulty:ring-2 peer-checked/difficulty:ring-rose-600 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer'>4</label>

                        <input type="radio" id='difficultyThree' name='difficulty' value={3} className="hidden peer peer/difficulty" />
                        <label htmlFor="difficultyThree" className='peer-checked:bg-rose-300 peer-checked/difficulty:ring-2 peer-checked/difficulty:ring-rose-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer'>3</label>

                        <input type="radio" id='difficultyTwo' name='difficulty' value={2} className="hidden peer peer/difficulty" />
                        <label htmlFor="difficultyTwo" className='peer-checked:bg-rose-200 peer-checked/difficulty:ring-2 peer-checked/difficulty:ring-rose-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer'>2</label>

                        <input type="radio" id='difficultyOne' name='difficulty' value={1} className="hidden peer peer/difficulty" />
                        <label htmlFor="difficultyOne" className='peer-checked:bg-rose-100 peer-checked/difficulty:ring-2 peer-checked/difficulty:ring-rose-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer'>1</label>
                    </div>    
                </div>

                <div className='flex flex-col mb-4 justify-center items-center bg-white w-max rounded-md py-5 px-20'>
                    <label className='mb-2 text-xs'>Workload:</label>
                    <div className='flex flex-row-reverse gap-3'>
                        <input type="radio" id='workloadFive' name='workload' value={5} className="hidden peer peer/workload"/>
                        <label htmlFor="workloadFive" className='peer-checked:bg-sky-500 peer-checked/workload:ring-2 peer-checked/workload:ring-sky-700 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer'>5</label>

                        <input type="radio" id='workloadFour' name='workload' value={4} className="hidden peer peer/workload" />
                        <label htmlFor="workloadFour" className='peer-checked:bg-sky-400 peer-checked/workload:ring-2 peer-checked/workload:ring-sky-600 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer'>4</label>

                        <input type="radio" id='workloadThree' name='workload' value={3} className="hidden peer peer/workload" />
                        <label htmlFor="workloadThree" className='peer-checked:bg-sky-300 peer-checked/workload:ring-2 peer-checked/workload:ring-sky-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer'>3</label>

                        <input type="radio" id='workloadTwo' name='workload' value={2} className="hidden peer peer/workload" />
                        <label htmlFor="workloadTwo" className='peer-checked:bg-sky-200 peer-checked/workload:ring-2 peer-checked/workload:ring-sky-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer'>2</label>

                        <input type="radio" id='workloadOne' name='workload' value={1} className="hidden peer peer/workload" />
                        <label htmlFor="workloadOne" className='peer-checked:bg-sky-100 peer-checked/workload:ring-2 peer-checked/workload:ring-sky-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer'>1</label>
                    </div>    
                </div>

                <label htmlFor="isRecommended">Would you Recommend this Class?</label>
                <input type="text" id='isRecommended' name='isRecommended'/>

                <label htmlFor="isGPABooster">Is this Class a GPA Booster?</label>
                <input type="text" id='isGPABooster' name='isGPABooster'/>

                <label htmlFor="primaryText">General Overview:</label>
                <textarea name="primaryText" id="primaryText" cols={80} rows={1} />

                <label htmlFor="secondaryText">Exam Tips:</label>
                <textarea name="secondaryText" id="secondaryText" cols={80} rows={1} />

                <button type="submit" formAction={(e) => onSubmit(e)} className=''>Submit</button>
            </form>
        </div>
    )
}

export default CommentForm;