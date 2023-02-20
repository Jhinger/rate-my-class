import Head from "next/head";
import { useState } from "react"
import prisma from '@/lib/prismadb'
import { GetServerSidePropsContext, InferGetServerSidePropsType, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import Chart from "@/components/Chart";
import SearchBar from "@/components/SearchBar";
import getPlaceholder from "@/util/getPlaceholder";

import type { Class, School } from "@prisma/client";
import type { UntypedObject } from "@/types";

interface ISchoolIndexProps {
    school: School;
    classes: Class[];
}

const SchoolIndex = ({ school, classes }: ISchoolIndexProps) => {
    const [userSelected, setUserSelected] = useState<UntypedObject>();

    const placeholder = getPlaceholder([classes[0], classes[classes.length - 1]]);

    console.log(school);
    console.log(classes);

    return (
        <>
            <Head>
				<title>{`RateMyClass - ${ school.short }`}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content={`${school}`}/>
				<link rel="icon" href="/static/logo-2.svg" sizes='16x16'/>
			</Head>

            <div className="flex justify-center h-[60rem] border-2 border-solid border-blue-500">
                <div className="min-w-[70rem] border-2 border-solid border-red-500 flex flex-col">
                    <h4 className="w-full p-4 mt-20 font-extrabold text-5xl tracking-tightest text-primary"> { school.name } ({ school.short }) </h4>
                    <div className="flex flex-row min-w-max">
                        <Chart type="barchart" />
                        <Chart type="barchart" />
                    </div>
                    <div className="flex justify-center mt-8">
                        <SearchBar options={classes} setUserSelected={setUserSelected} placeholder={placeholder} className="w-[50rem]" />
                    </div>
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
            schoolId: school!.id
        },
        select: {
            name: true,
            department: true
        }
    })

    return {
        props: { 
            school,
            classes
        }
    }
}