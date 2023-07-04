import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
// import { onSubmit } from './actions'; 
import * as z from 'zod';

import { 
    NUM_TEXTAREA_ROWS, 
    NUM_TEXTAREA_COLS 
} from '@/constants';

import { 
    CommentCreatetagsInputObjectSchema, 
    DELIVERYSchema, 
    TAGSchema 
} from '@/prisma/generated/schemas';
import type { Class } from '@prisma/client';
import { onSubmit, IFormValues } from './actions';

interface ICommentFormProps {
    schoolClass: Partial<Class> | null;
    className?: string;
}

const CommentSchema = z
    .object({
        tags: z
            .union([
                z.lazy(() => CommentCreatetagsInputObjectSchema),
                z.lazy(() => TAGSchema).array().max(3),
            ])
            .optional(),
    }).strict();

const CommentForm = ({ schoolClass, className }: ICommentFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormValues>({
        resolver: zodResolver(CommentSchema)
    });

    const onSubmit: SubmitHandler<IFormValues> = async (form) => {
        const data = await fetch(`/api/SFU/class/${schoolClass?.name}`, {
            method: 'POST',
            body: JSON.stringify(form)
        })

        if (data.ok) {
            console.log(await data.json());
        } else {
            throw new Error("Failed to fetch");
        }
    }

    return (
        <div className="w-[60rem] h-max flex justify-center items-center border-2 border-solid border-gray-400">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-wrap justify-center items-center w-max h-max text-sm">
                <div className='flex flex-col justify-center items-center my-4'>
                    <label>Delivery:</label>
                    <div className='flex flex-row my-2'>
                        <div className='m-2'>
                            <input type="radio" id='classDeliveryInPerson' name='classDelivery' value="INPERSON" className='hidden peer' defaultChecked/>
                            <label htmlFor="classDeliveryInPerson" className='bg-primary rounded-sm py-2 px-4 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500 duration-100 cursor-pointer unselectable'>In Person</label>
                        </div>
                        <div className='m-2'>
                            <input type="radio" id='classDeliveryOnline' name='classDelivery' value="ONLINE" className='hidden peer'/>
                            <label htmlFor="classDeliveryOnline" className='bg-primary rounded-sm py-2 px-4 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500 duration-100 cursor-pointer unselectable'>Online</label>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center mb-4'>
                    <label htmlFor="teacher">Teacher:</label>
                    <input type="text" id='teacher' name='teacher' className='w-[25rem] py-2 my-2 text-center rounded-md' autoComplete='off' autoFocus/>
                </div>

                <div className='flex flex-col mb-4 justify-center items-center bg-white w-max rounded-md py-5 px-20'>
                    <label className='mb-2 text-xs'>Overall Rating: <em className='text-xxs text-gray-500'>(1 = low, 5 = high)</em></label>
                    <div className='flex flex-row-reverse gap-3'>
                        <input type="radio" id='overallRatingFive' name='overallRating' value={5} className="hidden peer peer/rating"/>
                        <label htmlFor="overallRatingFive" className='peer-checked:bg-green-500 peer-checked/rating:ring-2 peer-checked/rating:ring-green-700 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>5</label>

                        <input type="radio" id='overallRatingFour' name='overallRating' value={4} className="hidden peer peer/rating" />
                        <label htmlFor="overallRatingFour" className='peer-checked:bg-green-400 peer-checked/rating:ring-2 peer-checked/rating:ring-green-600 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>4</label>

                        <input type="radio" id='overallRatingThree' name='overallRating' value={3} className="hidden peer peer/rating" />
                        <label htmlFor="overallRatingThree" className='peer-checked:bg-green-300 peer-checked/rating:ring-2 peer-checked/rating:ring-green-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>3</label>

                        <input type="radio" id='overallRatingTwo' name='overallRating' value={2} className="hidden peer peer/rating" />
                        <label htmlFor="overallRatingTwo" className='peer-checked:bg-green-200 peer-checked/rating:ring-2 peer-checked/rating:ring-green-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>2</label>

                        <input type="radio" id='overallRatingOne' name='overallRating' value={1} className="hidden peer peer/rating" />
                        <label htmlFor="overallRatingOne" className='peer-checked:bg-green-100 peer-checked/rating:ring-2 peer-checked/rating:ring-green-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>1</label>
                    </div>    
                </div>
                                
                <div className='flex flex-col mb-4 justify-center items-center bg-white w-max rounded-md py-5 px-20'>
                    <label className='mb-2 text-xs'>Difficulty: <em className='text-xxs text-gray-500'>(1 = low, 5 = high)</em></label>
                    <div className='flex flex-row-reverse gap-3'>
                        <input type="radio" id='difficultyFive' name='difficulty' value={5} className="hidden peer peer/difficulty"/>
                        <label htmlFor="difficultyFive" className='peer-checked:bg-rose-500 peer-checked/difficulty:ring-2 peer-checked/difficulty:ring-rose-700 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>5</label>

                        <input type="radio" id='difficultyFour' name='difficulty' value={4} className="hidden peer peer/difficulty" />
                        <label htmlFor="difficultyFour" className='peer-checked:bg-rose-400 peer-checked/difficulty:ring-2 peer-checked/difficulty:ring-rose-600 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>4</label>

                        <input type="radio" id='difficultyThree' name='difficulty' value={3} className="hidden peer peer/difficulty" />
                        <label htmlFor="difficultyThree" className='peer-checked:bg-rose-300 peer-checked/difficulty:ring-2 peer-checked/difficulty:ring-rose-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>3</label>

                        <input type="radio" id='difficultyTwo' name='difficulty' value={2} className="hidden peer peer/difficulty" />
                        <label htmlFor="difficultyTwo" className='peer-checked:bg-rose-200 peer-checked/difficulty:ring-2 peer-checked/difficulty:ring-rose-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>2</label>

                        <input type="radio" id='difficultyOne' name='difficulty' value={1} className="hidden peer peer/difficulty" />
                        <label htmlFor="difficultyOne" className='peer-checked:bg-rose-100 peer-checked/difficulty:ring-2 peer-checked/difficulty:ring-rose-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>1</label>
                    </div>    
                </div>

                <div className='flex flex-col mb-4 justify-center items-center bg-white w-max rounded-md py-5 px-20'>
                    <label className='mb-2 text-xs'>Workload: <em className='text-xxs text-gray-500'>(1 = low, 5 = high)</em></label>
                    <div className='flex flex-row-reverse gap-3'>
                        <input type="radio" id='workloadFive' name='workload' value={5} className="hidden peer peer/workload"/>
                        <label htmlFor="workloadFive" className='peer-checked:bg-sky-500 peer-checked/workload:ring-2 peer-checked/workload:ring-sky-700 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>5</label>

                        <input type="radio" id='workloadFour' name='workload' value={4} className="hidden peer peer/workload" />
                        <label htmlFor="workloadFour" className='peer-checked:bg-sky-400 peer-checked/workload:ring-2 peer-checked/workload:ring-sky-600 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>4</label>

                        <input type="radio" id='workloadThree' name='workload' value={3} className="hidden peer peer/workload" />
                        <label htmlFor="workloadThree" className='peer-checked:bg-sky-300 peer-checked/workload:ring-2 peer-checked/workload:ring-sky-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>3</label>

                        <input type="radio" id='workloadTwo' name='workload' value={2} className="hidden peer peer/workload" />
                        <label htmlFor="workloadTwo" className='peer-checked:bg-sky-200 peer-checked/workload:ring-2 peer-checked/workload:ring-sky-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>2</label>

                        <input type="radio" id='workloadOne' name='workload' value={1} className="hidden peer peer/workload" />
                        <label htmlFor="workloadOne" className='peer-checked:bg-sky-100 peer-checked/workload:ring-2 peer-checked/workload:ring-sky-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>1</label>
                    </div>    
                </div>

                <div className='flex flex-col justify-center items-center my-2'>
                    <label>Would you Recommend {schoolClass?.name ?? 'this Class'}?</label>
                    <div className='flex flex-row'>
                        <div className='mx-2 my-4'>
                            <input type="radio" id='isRecommendedYes' name='isRecommended' value="true" className='hidden peer'/>
                            <label htmlFor="isRecommendedYes" className='bg-primary rounded-sm py-2 px-8 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500 duration-100 cursor-pointer unselectable'>Yes</label>
                        </div>
                        <div className='mx-2 my-4'>
                            <input type="radio" id='isRecommendedNo' name='isRecommended' value="false" className='hidden peer'/>
                            <label htmlFor="isRecommendedNo" className='bg-primary rounded-sm py-2 px-8 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500 duration-100 cursor-pointer unselectable'>No</label>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center my-2'>
                    <label>Is {schoolClass?.name ?? 'this Class'} a GPA Booster?</label>
                    <div className='flex flex-row'>
                        <div className='mx-2 my-4'>
                            <input type="radio" id='isGPABoosterYes' name='isGPABooster' value={1} className='hidden peer'/>
                            <label htmlFor="isGPABoosterYes" className='bg-primary rounded-sm py-2 px-8 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500 duration-100 cursor-pointer unselectable'>Yes</label>
                        </div>
                        <div className='mx-2 my-4'>
                            <input type="radio" id='isGPABoosterNo' name='isGPABooster' value={0} className='hidden peer'/>
                            <label htmlFor="isGPABoosterNo" className='bg-primary rounded-sm py-2 px-8 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500 duration-100 cursor-pointer unselectable'>No</label>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center my-2'>
                    <label>Select up to 3 Tags:</label>
                    <div className='flex flex-row justify-center items-center'>
                        <input type="checkbox" id='tagTestHeavy' value="TEST_HEAVY" className='hidden peer' {...register('tags')} />
                        <label htmlFor="tagTestHeavy" className='w-max h-max rounded-sm flex justify-center items-center text-xs font-semibold px-2 py-1 bg-white peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500 duration-100 cursor-pointer unselectable'>Test Heavy</label>

                        <input type="checkbox" {...register('tags')} value="ASSIGNMENT_HEAVY" placeholder='Assignment Heavy' />
                        <input type="checkbox" {...register('tags')} value="LECTURES_RECORDED" />
                        <input type="checkbox" {...register('tags')} value="REQUIRED" />
                        <input type="checkbox" {...register('tags')} value="AVOID" />
                        <input type="checkbox" {...register('tags')} value="THEORY_HEAVY" />
                        <input type="checkbox" {...register('tags')} value="READING_HEAVY" />
                        <input type="checkbox" {...register('tags')} value="GROUPWORK_HEAVY" />
                        <input type="checkbox" {...register('tags')} value="PARTICIPATION_HEAVY" />
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center my-4'>
                    <label htmlFor="primaryText">General Overview:</label>
                    <textarea name="primaryText" id="primaryText" className='my-2 rounded-md p-8' cols={NUM_TEXTAREA_COLS} rows={NUM_TEXTAREA_ROWS} />
                </div>

                <div className='flex flex-col justify-center items-center my-4'>
                    <label htmlFor="secondaryText">Exam Tips:</label>
                    <textarea name="secondaryText" id="secondaryText" className='my-2 rounded-md p-8' cols={NUM_TEXTAREA_COLS} rows={NUM_TEXTAREA_ROWS} />
                </div>

                <div className='text-xxs text-gray-400'>Legal stuff here.</div>
                <button type="submit" className='py-2 px-6 rounded-md bg-tertiary m-4'>Submit</button>
            </form>
        </div>
    )
}

export default CommentForm;