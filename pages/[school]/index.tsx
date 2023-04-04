import Head from "next/head";
import { useState } from "react"
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import prisma from '@/lib/prismadb'
import Chart from "@/components/Chart";
import SearchBar from "@/components/SearchBar";
import getPlaceholder from "@/util/getPlaceholder";
import EmptyState from "@/components/EmptyState";
import Directory from "@/components/Directory";
import { colors_blue, colors_mauve } from '@/constants/boosterColors';

import type { Class, School } from "@prisma/client";
import type { DepartmentSummary, UntypedObject } from "@/types";

interface ISchoolIndexProps {
    school: School;
    classes: Class[];
    departmentSummary: DepartmentSummary[];
    boosters: UntypedObject[];
    difficulty: UntypedObject[];
}

const SchoolIndex = ({ school, classes, departmentSummary, boosters, difficulty }: ISchoolIndexProps) => {
    const [userSelected, setUserSelected] = useState<UntypedObject>();

    const placeholder = getPlaceholder([classes[0], classes[classes.length - 1]]);

    console.log(departmentSummary);
    console.log(boosters);
    console.log(difficulty);

    return (
        <>
            <Head>
				<title>{`RateMyClass - ${ school.short }`}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content={`${school}`}/>
				<link rel="icon" href="/static/logo-2.svg" sizes='16x16'/>
			</Head>

            <div className="center flex flex-col items-center max-w-[80rem] justify-start">
                <div className="min-w-[80rem] flex flex-col">
                    <h4 className="w-full p-4 mt-12 font-extrabold text-5xl tracking-tightest text-primary"> { school.name } ({ school.short }) </h4>
                    <div className="flex flex-row min-w-max">
                        <Chart type="barchart" data={boosters} label={'Highest Rated GPA Boosters'} colors={colors_blue} />
                        <Chart type="barchart" data={difficulty} label={'Highest Difficulty Classes'} colors={colors_mauve} />
                    </div>
                    <h4 className="center text-white font-light mt-4 pt-4">Search for a Class:</h4>
                    <div className="flex justify-center mt-4">
                        <SearchBar options={classes} setUserSelected={setUserSelected} placeholder={placeholder} className="w-[60rem]" />
                    </div>
                </div>
                <div className="w-11/12 mt-12 h-[30rem]">
                    {departmentSummary.length
                        ? <Directory summary={departmentSummary} />
                        : <EmptyState title="" subtitle="" callToAction={() => ""} />
                    }
                </div>
            </div>
        </>
    )
}

export default SchoolIndex;

export async function getServerSideProps<Q extends ParsedUrlQuery, D extends PreviewData>(context: GetServerSidePropsContext<Q, D>) {
    const params = context.params!;
    const schoolShort = params.school;

    const school = await prisma.school.findFirst({
        where: {
            short: schoolShort as string
        }
    });

    const classes = await prisma.class.findMany({
        where: {
            school: {
                id: school!.id
            }
        },
        select: {
            name: true
        }
    })

    const departmentSummary = await prisma.department.findMany({
        where: {
            schoolId: school!.id
        },
        select: {
            name: true,
            avgGrade: true,
            numComments: true
        },
        take: 15
    })

    const rawBoosters = await prisma.class.findMany({
        where: {
            schoolId: school!.id
        },
        orderBy: {
            avgBooster: "desc"
        },
        select: {
            name: true,
            avgBooster: true
        },
        take: 10
    });
    const boosters = rawBoosters.map(({ avgBooster, ...rest }) => ({ average: avgBooster, ...rest }));

    const rawDifficulty = await prisma.class.findMany({
        where: {
            schoolId: school!.id
        },
        orderBy: {
            avgDifficulty: "desc"
        },
        select: {
            name: true,
            avgDifficulty: true
        },
        take: 10
    });
    const difficulty = rawDifficulty.map(({ avgDifficulty, ...rest }) => ({ average: avgDifficulty, ...rest }));

    return {
        props: { 
            school,
            classes,
            boosters,
            difficulty,
            departmentSummary
        }
    }
}