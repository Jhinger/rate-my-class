"use server";

import prisma from '@/lib/prismadb';

const onSubmit = (form: FormData) => {
    console.log(form);
}

export {
    onSubmit
}