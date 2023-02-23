import Head from "next/head";
import { useState } from "react"
import prisma from '@/lib/prismadb'
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import Chart from "@/components/Chart";
import SearchBar from "@/components/SearchBar";
import getPlaceholder from "@/util/getPlaceholder";
import EmptyState from "@/components/EmptyState";
import Directory from "@/components/Directory";

import type { Class, School } from "@prisma/client";
import type { DepartmentSummary, UntypedObject } from "@/types";

interface ISchoolIndexProps {
    school: School;
    classes: Class[];
    departmentSummary: DepartmentSummary[];
}

const SchoolIndex = ({ school, classes, departmentSummary }: ISchoolIndexProps) => {
    const [userSelected, setUserSelected] = useState<UntypedObject>();

    const placeholder = getPlaceholder([classes[0], classes[classes.length - 1]]);

    console.log(departmentSummary);

    return (
        <>
            <Head>
				<title>{`RateMyClass - ${ school.short }`}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content={`${school}`}/>
				<link rel="icon" href="/static/logo-2.svg" sizes='16x16'/>
			</Head>

            <div className="center flex flex-col max-w-[70rem] justify-start h-[60rem] border-2 border-solid border-red-500">
                <div className="min-w-[70rem] flex flex-col">
                    <h4 className="w-full p-4 mt-12 font-extrabold text-5xl tracking-tightest text-primary"> { school.name } ({ school.short }) </h4>
                    <div className="flex flex-row min-w-max">
                        <Chart type="barchart" />
                        <Chart type="barchart" />
                    </div>
                    <h4 className="center text-white font-light mt-4 pt-4">Search for a Class:</h4>
                    <div className="flex justify-center mt-4">
                        <SearchBar options={classes} setUserSelected={setUserSelected} placeholder={placeholder} className="w-[60rem]" />
                    </div>
                </div>
                <div className="min-w-full flex flex-col border-2 border-solid border-blue-400">
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
            name: true,
            department: true
        }
    })

    const departmentSummary = await prisma.comment.groupBy({
        by: ['department'],
        _avg: {
            gradeRecieved: true
        },
        _count: true
    })

    return {
        props: { 
            school,
            classes,
            departmentSummary
        }
    }
}