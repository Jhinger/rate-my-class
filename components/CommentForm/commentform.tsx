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
        createdAt: z.coerce.date().optional(),
        difficulty: z.number(),
        isRecommended: z.boolean(),
        upvoteCount: z.number().optional(),
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
        deleted: z.boolean().optional(),
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
            <form action={() => handleSubmit(onSubmit)} className="flex flex-col flex-wrap justify-center items-center w-max h-max text-sm">
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

                <label htmlFor="teacher">Teacher:</label>
                <input type="text" id='teacher' name='teacher'/>

                <label>Overall Rating</label>
                <div className='flex flex-row-reverse'>
                    <input type="radio" id='overallRatingFive' name='overallRating' value={5} className="hidden peer"/>
                    <label htmlFor="overallRatingFive" className='peer-checked:bg-primaryAccent bg-primary p-4 rounded-sm'>5</label>

                    <input type="radio" id='overallRatingFour' name='overallRating' value={4} className="hidden peer" />
                    <label htmlFor="overallRatingFour" className='peer-checked:bg-primaryAccent bg-primary p-4 rounded-sm'>4</label>

                    <input type="radio" id='overallRatingThree' name='overallRating' value={3} className="hidden peer" />
                    <label htmlFor="overallRatingThree" className='peer-checked:bg-primaryAccent bg-primary p-4 rounded-sm'>3</label>

                    <input type="radio" id='overallRatingTwo' name='overallRating' value={2} className="hidden peer" />
                    <label htmlFor="overallRatingTwo" className='peer-checked:bg-primaryAccent bg-primary p-4 rounded-sm'>2</label>

                    <input type="radio" id='overallRatingOne' name='overallRating' value={1} className="hidden peer" />
                    <label htmlFor="overallRatingOne" className='peer-checked:bg-primaryAccent bg-primary p-4 rounded-sm'>1</label>
                </div>
                
                <label htmlFor="difficulty">Difficulty:</label>
                <input type="text" id='difficulty' name='difficulty'/>

                <label htmlFor="workload">Workload Hours:</label>
                <input type="text" id='workload' name='workload'/>

                <label htmlFor="isRecommended">Would you Recommend this Class?</label>
                <input type="text" id='isRecommended' name='isRecommended'/>

                <label htmlFor="isGPABooster">Is this Class a GPA Booster?</label>
                <input type="text" id='isGPABooster' name='isGPABooster'/>

                <label htmlFor="primaryText">General Overview:</label>
                <textarea name="primaryText" id="primaryText" cols={80} rows={4} />

                <label htmlFor="secondaryText">Exam Tips:</label>
                <textarea name="secondaryText" id="secondaryText" cols={80} rows={4} />

                <button type="submit" formAction={(e) => onSubmit(e)} className=''>Submit</button>
            </form>
        </div>
    )
}

export default CommentForm;