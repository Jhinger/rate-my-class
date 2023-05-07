import {
    getSchool,
    getClasses,
    getDepartments,
    getBoosters,
    getDifficultClasses
} from './actions'
import type { Metadata } from "next";
import { optionsBoosters, optionsDifficulty } from '@/config/chart';

export async function generateMetadata({ params }: { params: { school: string} }): Promise<Metadata | undefined> {
    const { school } = params;

    return {
        title: `RateMyClass - ${school}`,
        description: "Students helping students make informed decisions regarding their class schedule.",
        openGraph: {
          title: `RateMyClass - ${school}`,
          description: "Students helping students make informed decisions regarding their class schedule.",
          type: "website",
          url: `${process.env.NEXTAUTH_URL}/${school}`,
        },
        twitter: {
          card: "summary_large_image",
          title: `RateMyClass - ${school}`,
          description: "Students helping students make informed decisions regarding their class schedule.",
        },
    }
}

export default async function SchoolPage({ params }: { params: { school: string } }) {
    const { school } = params;
    const _school = await getSchool(school);
    
    const [classes, departments, boosters, difficults] = await Promise.all([
        getClasses(_school!),
        getDepartments(_school!),
        getBoosters(_school!),
        getDifficultClasses(_school!)
    ]);

    return (
        <div>

        </div>
    )
}