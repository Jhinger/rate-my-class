import {
    getSchool,
    getClasses,
    getDepartments,
    getBoosters,
    getDifficultClasses
} from './actions'
import Chart from '@/components/Chart';
import SearchBar from '@/components/SearchBar';
import Directory from '@/components/Directory';
import EmptyState from '@/components/EmptyState';
import LoadMore from '@/components/Button/LoadMore';
import getPlaceholder from '@/util/getPlaceholder';
import { colors_blue, colors_mauve } from '@/constants/boosterColors';
import { optionsBoosters, optionsDifficulty } from '@/config/chart';

import type { Metadata } from "next";

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

    const placeholder = getPlaceholder([classes[0], classes[classes.length - 1]]);

    return (
        <>
            <div className="center flex flex-col items-center max-w-[75rem] justify-start">
                <div className="min-w-[75em] flex justify-center items-center flex-col">
                    <h4 className="w-full p-4 mt-8 font-extrabold text-[2.75rem] tracking-tightest text-primary"> { _school?.name } ({ _school?.short }) </h4>
                    <div className="flex mb-4 gap-4 flex-row min-w-max">
                        <Chart type="barchart" classes="w-[36rem] h-max" data={boosters} label={'Highest Rated GPA Boosters'} colors={colors_blue} options={optionsBoosters} />
                        <Chart type="barchart" classes="w-[36rem] h-max" data={difficults} label={'Highest Difficulty Classes'} colors={colors_mauve} options={optionsDifficulty} />
                    </div>
                    <h4 className="center text-white font-base mt-4 pt-4">Search for a Class:</h4>
                    <div className="flex justify-center mt-4">
                        <SearchBar options={classes} placeholder={placeholder} className="w-[60rem]" />
                    </div>
                </div>
                <div className="w-11/12 mt-16 min-h-full">
                    {departments.length
                        ? <Directory summary={departments} />
                        : <EmptyState title="" subtitle="" callToAction={() => ""} />
                    }
                </div>
                <div className="my-12">
                    <LoadMore type="directory" />
                </div>
            </div>
        </>
    )
}