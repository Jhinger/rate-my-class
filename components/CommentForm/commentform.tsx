"use client";

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import * as z from 'zod';
import { X } from 'lucide-react';
import Icon from '@/components/Icon';

import { 
    NUM_TEXTAREA_ROWS, 
    NUM_TEXTAREA_COLS,
    LENGTH_PRIMARY_TEXT,
    LENGTH_SECONDARY_TEXT,
    LENGTH_TEACHER_NAME
} from '@/constants';

import { DELIVERYSchema, TAGSchema } from '@/prisma/generated/schemas';
import type { Class } from '@prisma/client';
import { ICommentFormValues } from '@/types';
import { Dispatch, SetStateAction, useState } from 'react';

interface ICommentFormProps {
    schoolName: string | null;
    schoolClass: Partial<Class> | null;
    setIsOpen: Dispatch<SetStateAction<boolean>>
    className?: string;
}

const CommentSchema = z
    .object({
        delivery: z.lazy(() => DELIVERYSchema).default("INPERSON"),
        teacher: z.string().min(0).max(LENGTH_TEACHER_NAME, { message: "Must be less than 25 characters." }).optional(),
        overallRating: z.coerce.number().min(1).max(5, { message: "Must select an Overall Rating" }),
        difficulty: z.coerce.number().min(1).max(5, { message: "Must select a Difficulty" }),
        workload: z.coerce.number().min(1).max(5, { message: "Must select an Overall Rating" }),
        gradeRecieved: z.coerce.number().min(0).max(11).optional().default(0).nullable(),
        isRecommended: z.enum(['1', '0']).transform(val => val === '1'),
        isGPABooster: z.coerce.number().min(0).max(1),
        tags: z.lazy(() => TAGSchema).array().min(0).max(3, { message: "Only select a max of 3 Tags." }).optional().default([]),
        primaryText: z.string().min(10, { message: "Must have atleast 10 characters." }).max(LENGTH_PRIMARY_TEXT, { message: "Must be less than 350 characters" }).nonempty(),
        secondaryText: z.string().max(LENGTH_SECONDARY_TEXT, { message: "Must be less than 350 characters" }).optional()
    }).strict();

const CommentForm = ({ schoolName, schoolClass, setIsOpen, className }: ICommentFormProps) => {
    const [teacherCount, setTeacherCount] = useState(0);
    const [overviewCount, setOverviewCount] = useState(0);
    const [examCount, setExamCount] = useState(0);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<ICommentFormValues>({
        resolver: zodResolver(CommentSchema),
        mode: 'all',
    });

    const onSubmit: SubmitHandler<ICommentFormValues> = async (form: ICommentFormValues) => {
        const body = {
            class: { connect: { id: schoolClass?.id } },
            ...form,
        };
        try {
            const data = await fetch(`/api/${schoolName}/class/${schoolClass?.name}`, {
                method: 'POST',
                body: JSON.stringify(body),
            })
    
            if (data.ok) {
                console.log("Return from Submit Route:");
                console.log(await data.json());
            }
        } catch (e: unknown) {
            if (e instanceof Error) {
                return e.message;
            }
            return new Error("Failed to post onSubmit");
        }
    }

    return (
        <div className="w-[60rem] pt-8 pb-16 h-max flex flex-col justify-center items-center rounded-md relative border-2 border-solid border-white overflow-x-hidden">
            <div className='w-full flex justify-end px-4 py-2 absolute top-0 right-0 hover:cursor-pointer'>
                <div onClick={() => setIsOpen(false)}>
                    <Icon icon={<X size={23} />} className="text-black hover:text-blue-500 duration-100" />
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-wrap justify-center items-center w-max h-max text-sm">
                <div className='flex flex-col justify-center items-center my-4'>
                    <label>Delivery: <span className='text-red-500'>*</span></label>
                    <div className='flex flex-row my-2'>
                        <div className='m-2'>
                            <input type="radio" id='classDeliveryInPerson' value="INPERSON" className='hidden peer' defaultChecked {...register('delivery')}/>
                            <label htmlFor="classDeliveryInPerson" className='bg-primary rounded-sm py-2 px-4 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500 duration-100 cursor-pointer unselectable'>In Person</label>
                        </div>
                        <div className='m-2'>
                            <input type="radio" id='classDeliveryOnline' value="ONLINE" className='hidden peer' {...register('delivery')}/>
                            <label htmlFor="classDeliveryOnline" className='bg-primary rounded-sm py-2 px-4 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500 duration-100 cursor-pointer unselectable'>Online</label>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center mb-6 relative'>
                    <label htmlFor="teacher">Teacher:</label>
                    <div className='w-full relative flex justify-center'>
                        <i className='text-xxs text-gray-500'>(Last name is sufficient)</i>
                        {teacherCount !== 0 && <div className='absolute right-2 text-xxxs text-red-500'>{teacherCount}/{LENGTH_TEACHER_NAME}</div>}
                    </div>
                    <input type="text" id='teacher' className='w-[25rem] py-2 my-2 text-center rounded-md' autoComplete='off' autoFocus {...register('teacher')} onChange={(e) => setTeacherCount(e.target.value.length)}/>
                    {errors.teacher?.message && <span className='text-red-500 text-xxs font-semibold absolute -bottom-4'>{errors.teacher.message}</span>}
                </div>

                <div className='flex flex-col mb-4 justify-center items-center bg-white w-max rounded-md py-5 px-20'>
                    <label className='mb-2 text-xs'>Overall Rating: <em className='text-xxs text-gray-500'>(1 = awful, 5 = awesome)</em> <span className='text-red-500'>*</span></label>
                    <div className='flex flex-row-reverse gap-3'>
                        <input type="radio" id='overallRatingFive' value={5} className="hidden peer peer/rating" {...register('overallRating')} />
                        <label htmlFor="overallRatingFive" className='peer-checked:bg-green-500 peer-checked/rating:ring-2 peer-checked/rating:ring-green-700 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>5</label>

                        <input type="radio" id='overallRatingFour' value={4} className="hidden peer peer/rating" {...register('overallRating')} />
                        <label htmlFor="overallRatingFour" className='peer-checked:bg-green-400 peer-checked/rating:ring-2 peer-checked/rating:ring-green-600 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>4</label>

                        <input type="radio" id='overallRatingThree' value={3} className="hidden peer peer/rating" {...register('overallRating')} />
                        <label htmlFor="overallRatingThree" className='peer-checked:bg-green-300 peer-checked/rating:ring-2 peer-checked/rating:ring-green-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>3</label>

                        <input type="radio" id='overallRatingTwo' value={2} className="hidden peer peer/rating"{...register('overallRating')}  />
                        <label htmlFor="overallRatingTwo" className='peer-checked:bg-green-200 peer-checked/rating:ring-2 peer-checked/rating:ring-green-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>2</label>

                        <input type="radio" id='overallRatingOne' value={1} className="hidden peer peer/rating" {...register('overallRating')} />
                        <label htmlFor="overallRatingOne" className='peer-checked:bg-green-100 peer-checked/rating:ring-2 peer-checked/rating:ring-green-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>1</label>
                    </div>    
                </div>
                                
                <div className='flex flex-col mb-4 justify-center items-center bg-white w-max rounded-md py-5 px-20'>
                    <label className='mb-2 text-xs'>Difficulty: <em className='text-xxs text-gray-500'>(1 = easy, 5 = hard)</em> <span className='text-red-500'>*</span></label>
                    <div className='flex flex-row-reverse gap-3'>
                        <input type="radio" id='difficultyFive' value={5} className="hidden peer peer/difficulty" {...register('difficulty')} />
                        <label htmlFor="difficultyFive" className='peer-checked:bg-rose-500 peer-checked/difficulty:ring-2 peer-checked/difficulty:ring-rose-700 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>5</label>

                        <input type="radio" id='difficultyFour' value={4} className="hidden peer peer/difficulty" {...register('difficulty')} />
                        <label htmlFor="difficultyFour" className='peer-checked:bg-rose-400 peer-checked/difficulty:ring-2 peer-checked/difficulty:ring-rose-600 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>4</label>

                        <input type="radio" id='difficultyThree' value={3} className="hidden peer peer/difficulty" {...register('difficulty')} />
                        <label htmlFor="difficultyThree" className='peer-checked:bg-rose-300 peer-checked/difficulty:ring-2 peer-checked/difficulty:ring-rose-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>3</label>

                        <input type="radio" id='difficultyTwo' value={2} className="hidden peer peer/difficulty" {...register('difficulty')} />
                        <label htmlFor="difficultyTwo" className='peer-checked:bg-rose-200 peer-checked/difficulty:ring-2 peer-checked/difficulty:ring-rose-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>2</label>

                        <input type="radio" id='difficultyOne' value={1} className="hidden peer peer/difficulty" {...register('difficulty')} />
                        <label htmlFor="difficultyOne" className='peer-checked:bg-rose-100 peer-checked/difficulty:ring-2 peer-checked/difficulty:ring-rose-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>1</label>
                    </div>    
                    {errors.difficulty?.message && <span>{errors.difficulty.message}</span>}
                </div>

                <div className='flex flex-col mb-4 justify-center items-center bg-white w-max rounded-md py-5 px-20'>
                    <label className='mb-2 text-xs'>Workload: <em className='text-xxs text-gray-500'>(1 = light, 5 = heavy)</em> <span className='text-red-500'>*</span></label>
                    <div className='flex flex-row-reverse gap-3'>
                        <input type="radio" id='workloadFive' value={5} className="hidden peer peer/workload" {...register('workload')} />
                        <label htmlFor="workloadFive" className='peer-checked:bg-sky-500 peer-checked/workload:ring-2 peer-checked/workload:ring-sky-700 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>5</label>

                        <input type="radio" id='workloadFour' value={4} className="hidden peer peer/workload" {...register('workload')} />
                        <label htmlFor="workloadFour" className='peer-checked:bg-sky-400 peer-checked/workload:ring-2 peer-checked/workload:ring-sky-600 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>4</label>

                        <input type="radio" id='workloadThree' value={3} className="hidden peer peer/workload" {...register('workload')} />
                        <label htmlFor="workloadThree" className='peer-checked:bg-sky-300 peer-checked/workload:ring-2 peer-checked/workload:ring-sky-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>3</label>

                        <input type="radio" id='workloadTwo' value={2} className="hidden peer peer/workload" {...register('workload')} />
                        <label htmlFor="workloadTwo" className='peer-checked:bg-sky-200 peer-checked/workload:ring-2 peer-checked/workload:ring-sky-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>2</label>

                        <input type="radio" id='workloadOne' value={1} className="hidden peer peer/workload" {...register('workload')} />
                        <label htmlFor="workloadOne" className='peer-checked:bg-sky-100 peer-checked/workload:ring-2 peer-checked/workload:ring-sky-500 ring-inset bg-gray-300 p-4 rounded-md hover:cursor-pointer unselectable'>1</label>
                    </div>    
                </div>

                <div className='flex flex-col justify-center items-center my-4'>
                    <label>Grade Recieved?</label>
                    <i className='text-xxs text-gray-500'>(Predict your grade if class is in progess)</i>
                    <div className='flex flex-row my-2 gap-4'>
                        <select className='bg-white py-2 px-8 rounded-md focus:ring-blue-500 focus:border-blue-500' {...register('gradeRecieved')}>
                            <option value="0">Unknown</option>
                            <option value="11">A+</option>
                            <option value="10">A</option>
                            <option value="9">A-</option>
                            <option value="8">B+</option>
                            <option value="7">B</option>
                            <option value="6">B-</option>
                            <option value="5">C+</option>
                            <option value="4">C</option>
                            <option value="3">C-</option>
                            <option value="2">D</option>
                            <option value="1">F</option>
                        </select>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center my-4'>
                    <label>Would you Recommend {schoolClass?.name ?? 'this Class'}? <span className='text-red-500'>*</span></label>
                    <div className='flex flex-row my-4 gap-4'>
                        <div>
                            <input type="radio" id='isRecommendedYes' value="1" className='hidden peer' {...register('isRecommended')}/>
                            <label htmlFor="isRecommendedYes" className='bg-white rounded-sm py-2 px-8 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500 duration-100 cursor-pointer unselectable'>Yes</label>
                        </div>
                        <div>
                            <input type="radio" id='isRecommendedNo' value="0" className='hidden peer' {...register('isRecommended')}/>
                            <label htmlFor="isRecommendedNo" className='bg-white rounded-sm py-2 px-8 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500 duration-100 cursor-pointer unselectable'>No</label>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center my-4'>
                    <label>Is {schoolClass?.name ?? 'this Class'} a GPA Booster? <span className='text-red-500'>*</span></label>
                    <div className='flex flex-row my-4 gap-4'>
                        <div>
                            <input type="radio" id='isGPABoosterYes' value="1" className='hidden peer' {...register('isGPABooster')}/>
                            <label htmlFor="isGPABoosterYes" className='bg-white rounded-sm py-2 px-8 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500 duration-100 cursor-pointer unselectable'>Yes</label>
                        </div>
                        <div>
                            <input type="radio" id='isGPABoosterNo' value="0" className='hidden peer' {...register('isGPABooster')}/>
                            <label htmlFor="isGPABoosterNo" className='bg-white rounded-sm py-2 px-8 peer-checked:bg-primaryAccent peer-checked:ring-2 peer-checked:ring-blue-500 duration-100 cursor-pointer unselectable'>No</label>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-5/6 justify-center items-center my-6 relative'>
                    <label className='flex flex-col justify-center items-center'>
                        <span>Select up to <strong>3 Tags:</strong> <span className='text-red-500'>*</span></span>
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

                        <input type="checkbox" id='tagScaled' value="GRADE_SCALED" className='hidden peer/scaled' {...register('tags')} />
                        <label htmlFor="tagScaled" className='w-max h-max rounded-sm flex justify-center items-center text-xs font-semibold px-2 py-1 bg-white peer-checked/scaled:bg-primaryAccent peer-checked/scaled:ring-2 peer-checked/scaled:ring-blue-500 duration-100 cursor-pointer unselectable'>Grade Scaled</label>

                        <input type="checkbox" id='tagCurved' value="GRADE_CURVED" className='hidden peer/curved' {...register('tags')} />
                        <label htmlFor="tagCurved" className='w-max h-max rounded-sm flex justify-center items-center text-xs font-semibold px-2 py-1 bg-white peer-checked/curved:bg-primaryAccent peer-checked/curved:ring-2 peer-checked/curved:ring-blue-500 duration-100 cursor-pointer unselectable'>Grade Curved</label>

                        <input type="checkbox" id='tagTough' value="TOUGH_GRADING" className='hidden peer/tough' {...register('tags')} />
                        <label htmlFor="tagTough" className='w-max h-max rounded-sm flex justify-center items-center text-xs font-semibold px-2 py-1 bg-white peer-checked/tough:bg-primaryAccent peer-checked/tough:ring-2 peer-checked/tough:ring-blue-500 duration-100 cursor-pointer unselectable'>Tough Grading</label>

                        <input type="checkbox" id='tagUseful' value="USEFUL" className='hidden peer/useful' {...register('tags')} />
                        <label htmlFor="tagUseful" className='w-max h-max rounded-sm flex justify-center items-center text-xs font-semibold px-2 py-1 bg-white peer-checked/useful:bg-primaryAccent peer-checked/useful:ring-2 peer-checked/useful:ring-blue-500 duration-100 cursor-pointer unselectable'>Useful</label>

                        <input type="checkbox" id='tagFinals' value="NO_FINALS" className='hidden peer/finals' {...register('tags')} />
                        <label htmlFor="tagFinals" className='w-max h-max rounded-sm flex justify-center items-center text-xs font-semibold px-2 py-1 bg-white peer-checked/finals:bg-primaryAccent peer-checked/finals:ring-2 peer-checked/finals:ring-blue-500 duration-100 cursor-pointer unselectable'>No Finals</label>

                        <input type="checkbox" id='tagQuizzes' value="QUIZZES" className='hidden peer/quizzes' {...register('tags')} />
                        <label htmlFor="tagQuizzes" className='w-max h-max rounded-sm flex justify-center items-center text-xs font-semibold px-2 py-1 bg-white peer-checked/quizzes:bg-primaryAccent peer-checked/quizzes:ring-2 peer-checked/quizzes:ring-blue-500 duration-100 cursor-pointer unselectable'>Quizzes</label>

                        <input type="checkbox" id='tagInteresting' value="INTERESTING" className='hidden peer/interesting' {...register('tags')} />
                        <label htmlFor="tagInteresting" className='w-max h-max rounded-sm flex justify-center items-center text-xs font-semibold px-2 py-1 bg-white peer-checked/interesting:bg-primaryAccent peer-checked/interesting:ring-2 peer-checked/interesting:ring-blue-500 duration-100 cursor-pointer unselectable'>Interesting</label>
                    </div>
                    {errors.tags?.message && <span className='text-red-500 text-xxs font-semibold absolute -bottom-4'>{errors.tags.message}</span>}
                </div>

                <div className='flex flex-col justify-center items-center my-5 relative'>
                    <label htmlFor="primaryText">General Overview: <span className='text-red-500'>*</span></label>
                    <div className='w-full relative flex justify-center'>
                        <i className='text-xxs text-gray-500'>(quality, pace of class, subjects to focus on, difficulty relative to other classes, etc.)</i>
                        {overviewCount !== 0 && <div className='absolute right-2 text-xxxs text-red-500'>{overviewCount}/{LENGTH_PRIMARY_TEXT}</div>}
                    </div>
                    <textarea id="primaryText" className='my-2 rounded-md p-8' placeholder='Required' cols={NUM_TEXTAREA_COLS} rows={NUM_TEXTAREA_ROWS} {...register('primaryText', { required: true })} onChange={(e) => setOverviewCount(e.target.value.length)} />
                    {errors.primaryText?.message && <span className='text-red-500 text-xxs font-semibold absolute -bottom-5'>{errors.primaryText.message}</span>}
                </div>

                <div className='flex flex-col justify-center items-center my-5 relative'>
                    <label htmlFor="secondaryText">Exam Tips:</label>
                    <div className='w-full relative flex justify-center'>
                        <i className='text-xxs text-gray-500'>(exam format, study tips, study resources to use, question types, etc.)</i>
                        {examCount !== 0 && <div className='absolute right-2 text-xxxs text-red-500'>{examCount}/{LENGTH_SECONDARY_TEXT}</div>}
                    </div>
                    <textarea id="secondaryText" className='my-2 rounded-md p-8' placeholder='Optional' cols={NUM_TEXTAREA_COLS} rows={NUM_TEXTAREA_ROWS} {...register('secondaryText')} onChange={(e) => setExamCount(e.target.value.length)} />
                    {errors.secondaryText?.message && <span className='text-red-500 text-xxs font-semibold absolute -bottom-5'>{errors.secondaryText.message}</span>}
                </div>

                <div className='text-xxs text-gray-500 w-1/2 text-center my-6'>
                    By clicking the &quot;Submit&quot; button, I acknowledge that I have read and agreed to the RateMyClass <Link href={'/site-guidelines'} className="text-blue-400 hover:text-tertiaryComplement duration-100 hover:cursor-pointer">Site Guidelines</Link>,
                    <Link href={'/terms'} className="text-blue-400 hover:text-tertiaryComplement duration-100 hover:cursor-pointer"> Terms of Use</Link> and <Link href={'/privacy-policy'} className="text-blue-400 hover:text-tertiaryComplement duration-100 hover:cursor-pointer">Privacy Policy</Link>. Submitted data becomes the property of RateMyClass.io
                </div>
                {!isValid && <span className='text-xxs text-red-500'>Cannot Submit - Form is missing required input(s).</span>}
                <button type="submit" className='py-2 px-6 rounded-md bg-primaryAccent hover:ring-2 hover:ring-blue-500 hover:ring-inset duration-75 m-4 disabled:bg-opacity-50 disabled:cursor-not-allowed' disabled={!isValid}>Submit</button>
            </form>
        </div>
    )
}

export default CommentForm;