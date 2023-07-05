"use client";

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import * as z from 'zod';

import { 
    NUM_TEXTAREA_ROWS, 
    NUM_TEXTAREA_COLS 
} from '@/constants';

import { TAGSchema } from '@/prisma/generated/schemas';
import type { Class } from '@prisma/client';
import { onSubmit, IFormValues } from './actions';

interface ICommentFormProps {
    schoolName: string | null;
    schoolClass: Partial<Class> | null;
    className?: string;
}

const CommentSchema = z
    .object({
        tags: z.lazy(() => TAGSchema).array().max(3, { message: "Only select a max of 3 Tags." }).optional(),
    }).strict();

const CommentForm = ({ schoolName, schoolClass, className }: ICommentFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
    } = useForm<IFormValues>({
        resolver: zodResolver(CommentSchema),
        mode: 'onChange'
    });

    const onSubmit: SubmitHandler<IFormValues> = async (form) => {
        const data = await fetch(`/api/${schoolName}/class/${schoolClass?.name}`, {
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
                    <div className='flex flex-row my-4 gap-4'>
                        <div>
                            <input type="radio" id='isRecommendedYes' name='isRecommended' value="true" className='hidden peer'/>
                            <label htmlFor="isRecommendedYes" className='bg-primary rounded-sm py-2 px-8 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500 duration-100 cursor-pointer unselectable'>Yes</label>
                        </div>
                        <div>
                            <input type="radio" id='isRecommendedNo' name='isRecommended' value="false" className='hidden peer'/>
                            <label htmlFor="isRecommendedNo" className='bg-primary rounded-sm py-2 px-8 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500 duration-100 cursor-pointer unselectable'>No</label>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center my-2'>
                    <label>Is {schoolClass?.name ?? 'this Class'} a GPA Booster?</label>
                    <div className='flex flex-row my-4 gap-4'>
                        <div>
                            <input type="radio" id='isGPABoosterYes' name='isGPABooster' value={1} className='hidden peer'/>
                            <label htmlFor="isGPABoosterYes" className='bg-primary rounded-sm py-2 px-8 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500 duration-100 cursor-pointer unselectable'>Yes</label>
                        </div>
                        <div>
                            <input type="radio" id='isGPABoosterNo' name='isGPABooster' value={0} className='hidden peer'/>
                            <label htmlFor="isGPABoosterNo" className='bg-primary rounded-sm py-2 px-8 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500 duration-100 cursor-pointer unselectable'>No</label>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center my-6 relative'>
                    <label className='flex flex-col justify-center items-center'>
                        <span>Select up to <strong>3 Tags:</strong> <span className='text-xxs text-gray-500'>(optional)</span></span>
                    </label>
                    <div className='flex flex-row flex-wrap w-1/2 my-4 gap-2 justify-center items-center'>
                        <input type="checkbox" id='tagTestHeavy' value="TEST_HEAVY" className='hidden peer/test' {...register('tags')} />
                        <label htmlFor="tagTestHeavy" className='w-max h-max rounded-sm flex justify-center items-center text-xs font-semibold px-2 py-1 bg-white peer-checked/test:bg-primaryAccent peer-checked/test:ring-2 peer-checked/test:ring-blue-500 duration-100 cursor-pointer unselectable'>Test Heavy</label>

                        <input type="checkbox" id='tagAssignmentHeavy' value="ASSIGNMENT_HEAVY" className='hidden peer/assign' {...register('tags')} />
                        <label htmlFor="tagAssignmentHeavy" className='w-max h-max rounded-sm flex justify-center items-center text-xs font-semibold px-2 py-1 bg-white peer-checked/assign:bg-primaryAccent peer-checked/assign:ring-2 peer-checked/assign:ring-blue-500 duration-100 cursor-pointer unselectable'>Assignment Heavy</label>

                        <input type="checkbox" id='tagLectures' value="LECTURES_RECORDED" className='hidden peer/lectures' {...register('tags')} />
                        <label htmlFor="tagLectures" className='w-max h-max rounded-sm flex justify-center items-center text-xs font-semibold px-2 py-1 bg-white peer-checked/lectures:bg-primaryAccent peer-checked/lectures:ring-2 peer-checked/lectures:ring-blue-500 duration-100 cursor-pointer unselectable'>Lectures Recorded</label>

                        <input type="checkbox" id='tagRequired' value="REQUIRED" className='hidden peer/required' {...register('tags')} />
                        <label htmlFor="tagRequired" className='w-max h-max rounded-sm flex justify-center items-center text-xs font-semibold px-2 py-1 bg-white peer-checked/required:bg-primaryAccent peer-checked/required:ring-2 peer-checked/required:ring-blue-500 duration-100 cursor-pointer unselectable'>Required</label>

                        <input type="checkbox" id='tagAvoid' value="AVOID" className='hidden peer/avoid' {...register('tags')} />
                        <label htmlFor="tagAvoid" className='w-max h-max rounded-sm flex justify-center items-center text-xs font-semibold px-2 py-1 bg-white peer-checked/avoid:bg-primaryAccent peer-checked/avoid:ring-2 peer-checked/avoid:ring-blue-500 duration-100 cursor-pointer unselectable'>Avoid</label>

                        <input type="checkbox" id='tagTheory' value="THEORY_HEAVY" className='hidden peer/theory' {...register('tags')} />
                        <label htmlFor="tagTheory" className='w-max h-max rounded-sm flex justify-center items-center text-xs font-semibold px-2 py-1 bg-white peer-checked/theory:bg-primaryAccent peer-checked/theory:ring-2 peer-checked/theory:ring-blue-500 duration-100 cursor-pointer unselectable'>Theory Heavy</label>

                        <input type="checkbox" id='tagReading' value="READING_HEAVY" className='hidden peer/reading' {...register('tags')} />
                        <label htmlFor="tagReading" className='w-max h-max rounded-sm flex justify-center items-center text-xs font-semibold px-2 py-1 bg-white peer-checked/reading:bg-primaryAccent peer-checked/reading:ring-2 peer-checked/reading:ring-blue-500 duration-100 cursor-pointer unselectable'>Reading Heavy</label>

                        <input type="checkbox" id='tagGroup' value="GROUPWORK_HEAVY" className='hidden peer/group' {...register('tags')} />
                        <label htmlFor="tagGroup" className='w-max h-max rounded-sm flex justify-center items-center text-xs font-semibold px-2 py-1 bg-white peer-checked/group:bg-primaryAccent peer-checked/group:ring-2 peer-checked/group:ring-blue-500 duration-100 cursor-pointer unselectable'>Groupwork Heavy</label>

                        <input type="checkbox" id='tagParticipation' value="PARTICIPATION_MATTERS" className='hidden peer/participation' {...register('tags')} />
                        <label htmlFor="tagParticipation" className='w-max h-max rounded-sm flex justify-center items-center text-xs font-semibold px-2 py-1 bg-white peer-checked/participation:bg-primaryAccent peer-checked/participation:ring-2 peer-checked/participation:ring-blue-500 duration-100 cursor-pointer unselectable'>Participation Matters</label>
                    </div>
                    {errors.tags?.message && <span className='text-red-500 text-xxs font-semibold absolute -bottom-4'>{errors.tags.message}</span>}
                </div>

                <div className='flex flex-col justify-center items-center my-4'>
                    <label htmlFor="primaryText">General Overview:</label>
                    <textarea name="primaryText" id="primaryText" className='my-2 rounded-md p-8' cols={NUM_TEXTAREA_COLS} rows={NUM_TEXTAREA_ROWS} />
                </div>

                <div className='flex flex-col justify-center items-center my-4'>
                    <label htmlFor="secondaryText">Exam Tips:</label>
                    <textarea name="secondaryText" id="secondaryText" className='my-2 rounded-md p-8' cols={NUM_TEXTAREA_COLS} rows={NUM_TEXTAREA_ROWS} />
                </div>

                <div className='text-xxs text-gray-500 w-1/2 text-center my-2'>
                    By clicking the &quot;Submit&quot; button, I acknowledge that I have read and agreed to the RateMyClass <Link href={'/site-guidelines'} className="text-blue-400 hover:text-tertiaryComplement duration-100 hover:cursor-pointer">Site Guidelines</Link>,
                    <Link href={'/terms'} className="text-blue-400 hover:text-tertiaryComplement duration-100 hover:cursor-pointer"> Terms of Use</Link> and <Link href={'/privacy-policy'} className="text-blue-400 hover:text-tertiaryComplement duration-100 hover:cursor-pointer">Privacy Policy</Link>. Submitted data becomes the property of RateMyClass.io
                </div>
                <button type="submit" className='py-2 px-6 rounded-md bg-primaryAccent hover:ring-2 hover:ring-blue-500 hover:ring-inset duration-75 m-4 disabled:bg-opacity-50 disabled:cursor-not-allowed' disabled={!isDirty || !isValid}>Submit</button>
            </form>
        </div>
    )
}

export default CommentForm;