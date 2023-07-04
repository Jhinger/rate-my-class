"use server";

import prisma from '@/lib/prismadb';
import { revalidatePath } from 'next/cache';
import type { FieldValues, SubmitHandler } from 'react-hook-form';

export interface IFormValues {
    tags: string[];
}

export async function onSubmit(form: IFormValues) {
    
    console.log(form);
    // const tags = form.getAll("tags");
    // revalidatePath('/[school]/[class]');
}