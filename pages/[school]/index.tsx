import Head from "next/head";
import prisma from '@/lib/prismadb'
import { GetServerSidePropsContext, InferGetServerSidePropsType, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import Chart from "@/components/Chart";

import type { School } from "@prisma/client";

interface ISchoolIndexProps {
    school: School;
}

const SchoolIndex = ({ school }: ISchoolIndexProps) => {
    console.log(school);

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
                    <h4 className="w-full p-4 mt-20 font-extrabold text-5xl tracking-tightest text-primary border-2 border-solid border-green-500"> { school.name } ({ school.short }) </h4>
                    <div>
                        <Chart />
                        <Chart />
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

    return {
        props: { school }
    }
}