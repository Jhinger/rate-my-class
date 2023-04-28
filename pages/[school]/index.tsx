import { useState } from "react"
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import prisma from '@/lib/prismadb'
import Chart from "@/components/Chart";
import SearchBar from "@/components/SearchBar";
import getPlaceholder from "@/util/getPlaceholder";
import EmptyState from "@/components/EmptyState";
import Directory from "@/components/Directory";
import SEO from "@/components/SEO";
import CallToAction from "@/components/Button/CallToAction";
import { colors_blue, colors_mauve } from '@/constants/boosterColors';
import { MAX_BOOSTER_CLASSES, MAX_DEPARTMENTS, MAX_DIFFICULTY_CLASSES } from '@/constants/'
import { ChevronDown } from "lucide-react";

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

    const optionsBoosters = {
        scales: {
            y: {
                min: 0,
                max: 1
            },

        }
    }

    const optionsDifficulty = {
        scales: {
            y: {
                min: 0,
                max: 5
            }
        }
    }

    return (
        <>
            <SEO title={`RateMyClass - ${school.short}`}/>

            <div className="center flex flex-col items-center max-w-[75rem] justify-start">
                <div className="min-w-[75em] flex flex-col">
                    <h4 className="w-full p-4 mt-12 font-extrabold text-[2.75rem] tracking-tightest text-primary"> { school.name } ({ school.short }) </h4>
                    <div className="flex flex-row min-w-max">
                        <Chart type="barchart" data={boosters} label={'Highest Rated GPA Boosters'} colors={colors_blue} options={optionsBoosters} />
                        <Chart type="barchart" data={difficulty} label={'Highest Difficulty Classes'} colors={colors_mauve} options={optionsDifficulty} />
                    </div>
                    <h4 className="center text-white font-base mt-4 pt-4">Search for a Class:</h4>
                    <div className="flex justify-center mt-4">
                        <SearchBar options={classes} setUserSelected={setUserSelected} placeholder={placeholder} className="w-[60rem]" />
                    </div>
                </div>
                <div className="w-11/12 mt-16 min-h-full">
                    {departmentSummary.length
                        ? <Directory summary={departmentSummary} />
                        : <EmptyState title="" subtitle="" callToAction={() => ""} />
                    }
                </div>
                <div className="my-12">
                    <CallToAction onClick={() => ""} className="bg-primary">
                        <ChevronDown size={20} className="relative right-2" />
                        <span className="unselectable">Load More</span>
                    </CallToAction>
                </div>
            </div>
        </>
    )
}

export default SchoolIndex;

export async function getServerSideProps<Q extends ParsedUrlQuery, D extends PreviewData>(context: GetServerSidePropsContext<Q, D>) {
    context.res.setHeader(
        'Cache-Control',
        'public, s-maxage=120, stale-while-revalidate=60'
    )
    
    const params = context.params!;
    const schoolShort = params.school;

    const school = await prisma.school.findFirst({
        where: {
            short: schoolShort as string
        }
    });

    const classes = await prisma.class.findMany({
        where: {
            schoolId: school!.id
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
        orderBy: {
            numComments: 'desc'
        },
        take: MAX_DEPARTMENTS
    })

    const boosters = await prisma.class.findMany({
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
        take: MAX_BOOSTER_CLASSES
    });

    const difficulty = await prisma.class.findMany({
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
        take: MAX_DIFFICULTY_CLASSES
    });

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