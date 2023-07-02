"use server";

import prisma from '@/lib/prismadb';
import { revalidatePath } from 'next/cache';

const onSubmit = (form: FormData) => {
    
    console.log(form);
    // revalidatePath('/[school]/[class]');
}

export {
    onSubmit
}