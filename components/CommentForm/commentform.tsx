import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
  department: z.string(),
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
})
.strict();

const CommentForm = ({ className }: ICommentFormProps) => {
    /* const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(CommentCreateInputObjectSchema)
    }); */

    return (
        <div className="w-[60rem] h-full flex justify-center items-center border-2 border-solid border-red-500">
            <form onSubmit={() => console.log('')} className="flex flex-col flex-wrap justify-center items-center w-max h-max text-sm">
                <label>Delivery:</label>
                <div className='flex flex-row'>
                    <div className='m-2'>
                        <input type="radio" id='classDeliveryInPerson' name='classDelivery' className='hidden peer'/>
                        <label htmlFor="classDeliveryInPerson" className='bg-primary rounded-sm py-2 px-4 peer-checked:bg-primaryAccent duration-100'>In Person</label>
                    </div>
                    <div className='m-2'>
                        <input type="radio" id='classDeliveryOnline' name='classDelivery' className='hidden peer'/>
                        <label htmlFor="classDeliveryOnline" className='bg-primary rounded-sm py-2 px-4 peer-checked:bg-primaryAccent duration-100'>Online</label>
                    </div>
                </div>

                <label htmlFor="classTeacher">Teacher:</label>
                <input type="text" id='classTeacher' name='classTeacher'/>

                <label htmlFor="classOverallRating">Overall Rating:</label>
                <input type="text" id='classOverallRating' name='classOverallRating'/>
                
                <label htmlFor="classDifficulty">Difficulty:</label>
                <input type="text" id='classDifficulty' name='classDifficulty'/>

                <label htmlFor="classWorkload">Workload Hours:</label>
                <input type="text" id='classWorkload' name='classWorkload'/>

                <label htmlFor="classRecommended">Would you Recommend this Class?</label>
                <input type="text" id='classRecommended' name='classRecommended'/>

                <label htmlFor="classBooster">Is this Class a GPA Booster?</label>
                <input type="text" id='classBooster' name='classBooster'/>

                <label htmlFor="primaryText">General Overview:</label>
                <textarea name="primaryText" id="primaryText" cols={80} rows={4} />

                <label htmlFor="secondaryText">Exam Tips:</label>
                <textarea name="secondaryText" id="secondaryText" cols={80} rows={4} />
            </form>
        </div>
    )
}

export default CommentForm;