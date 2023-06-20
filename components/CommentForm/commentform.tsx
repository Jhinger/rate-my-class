import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

interface ICommentFormProps {
    className?: string;
}

const commentSchema = z.object({
    difficulty: z.number().min(1, { message: 'Required' }),
    isRecommened: z.boolean(),
    workload: z.number(),
    teacher: z.string().min(1).max(35),
    isGPABooster: z.number(),
    overallRating: z.number(),
    tags: z.string().max(3).array().optional(),
    delivery: z.string(),
    gradeRecieved: z.number(),
    primaryText: z.string().min(1).max(350),
    secondaryText: z.string().refine((val) => val.length < 350, {
        message: 'Text cannot be longer than 350 characters'
    }).optional(),
})

const CommentForm = ({ className }: ICommentFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(commentSchema)
    });

    return (
        <div className="">
            
        </div>
    )
}

export default CommentForm;