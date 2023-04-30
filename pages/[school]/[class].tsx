import SEO from "@/components/SEO";
import ProgressBar from "@/components/ProgressBar";
import ClassHeader from "@/components/ClassHeader";
import ClassSummary from "@/components/ClassSummary";
import Chart from "@/components/Chart";
import { colors_blue } from "@/constants/boosterColors";
import { GetServerSidePropsContext, InferGetServerSidePropsType, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import prisma from '@/lib/prismadb'
import completeDistribution from "@/util/completeDistribution";

const Class = ({ school, _class, averages, numComments, comments, distribution }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(school);
    console.log(_class);
    console.log(averages);
    console.log(numComments);
    console.log(comments);
    console.log(distribution);

    return (
        <div>
            <SEO title={`RateMyClass - ${_class!.name} (${school!.name})`} />
            { _class!.name }
            { school!.name }

            <ClassHeader className="w-full h-[35rem] flex flex-row justify-center items-center border-2 border-solid border-red-500">
                <>
                    <div className="for summary">
                        <ClassSummary />
                    </div>
                    <div className="min-w-[75rem] flex flex-row">
                        <Chart type="barchart" data={distribution} label={`${_class!.name} Grade Distribution`} colors={colors_blue} />

                    </div>
                </>
            </ClassHeader>

            <ProgressBar percent={3.5} maxPercent={5} color="bg-tertiary" textColor="text-tertiary"/>
        </div>
    )
}

export default Class;

export async function getServerSideProps<Q extends ParsedUrlQuery, D extends PreviewData>(context: GetServerSidePropsContext<Q, D>) {
    context.res.setHeader(
        "Cache-Control",
        "public, s-maxage=600, stale-while-revalidate=120"
    );

    const params = context.params!;
    const class_name = params.class;
    const schoolShort = params.school;

    const school = await prisma.school.findFirst({
        where: {
            short: schoolShort as string
        },
        select: {
            id: true,
            name: true,
            short: true
        }
    })

    const _class = await prisma.class.findFirst({
        where: {
            name: class_name as string
        },
        select: {
            id: true,
            name: true
        }
    });

    // Fetch class data - avgWorkload, avgDiffifculty, avgRecommend, avgGrade.
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

    // Fetch number of ratings.
    const numComments = await prisma.comment.aggregate({
        where: {
            classId: _class!.id
        },
        _count: true
    })

    // Fetch last 10 comments.
    const comments = await prisma.comment.findMany({
        where: {
            classId: _class!.id,
            deleted: false
        },
        take: 10
    })

    // Fetch grade distribution - count of comments for each letter grade.
    const incomplete_distribution = await prisma.comment.groupBy({
        where: {
            classId: _class!.id
        },
        by: ['gradeRecieved'],
        _count: true
    })
    const distribution = completeDistribution(incomplete_distribution);

    return {
        props: {
            school,
            _class,
            averages,
            numComments,
            comments: JSON.parse(JSON.stringify(comments)),
            distribution
        }
    }
}