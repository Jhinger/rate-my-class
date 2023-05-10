import prisma from '@/lib/prismadb';
import { MAX_COMMENTS } from '@/constants';
import completeDistribution from '@/util/completeDistribution';

import type { School, Class, Comment } from '@prisma/client';

async function findSchool(short: string): Promise<Partial<School> | null> {
    const _school = await prisma.school.findFirst({
        where: {
            short: short
        },
        select: {
            id: true,
            name: true,
            short: true
        }
    });

    return _school;
}

async function findClass(name: string): Promise<Partial<Class> | null> {
    const _class = await prisma.class.findFirst({
        where: {
            name: name as string
        },
        select: {
            id: true,
            name: true,
            numComments: true
        }
    });

    return _class;
}

async function findAverages(school: Partial<School>): Promise<Partial<Class> | null> {
    const averages = await prisma.class.findFirst({
        where: {
            schoolId: school!.id
        },
        select: {
            avgWorkload: true,
            avgDifficulty: true,
            avgRecommended: true,
            avgGrade: true,
            avgBooster: true
        },
    });

    return averages;
}

async function getComments(_class: Partial<Class>): Promise<Comment[]> {
    const comments = await prisma.comment.findMany({
        where: {
            classId: _class!.id,
            deleted: false
        },
        take: MAX_COMMENTS
    });

    return comments;
}

async function getGradeDistribution(_class: Partial<Class>): Promise<any> {
    const incomplete_dstribution = await prisma.comment.groupBy({
        where: {
            classId: _class!.id
        },
        by: ['gradeRecieved'],
        _count: true
    });

    return completeDistribution(incomplete_dstribution);
}

export {
    findSchool,
    findClass,
    findAverages,
    getComments,
    getGradeDistribution
}
