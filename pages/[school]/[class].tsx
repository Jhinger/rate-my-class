import SEO from "@/components/SEO";
import ClassHeader from "@/components/ClassHeader";
import ClassSummary from "@/components/ClassSummary";
import Chart from "@/components/Chart";
import { colors_blue } from "@/constants/boosterColors";
import { GetServerSidePropsContext, InferGetServerSidePropsType, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import prisma from '@/lib/prismadb'
import completeDistribution from "@/util/completeDistribution";    
import CallToAction from "@/components/Button/CallToAction";
import CommentsContainer from "@/components/CommentsContainer";
import CommentOptionsContainer from "@/components/CommentOptionsContainer";
import Comment from "@/components/Comment";

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
            <ClassHeader className="w-full h-full flex justify-center pt-12 pb-24">
                <div className="flex flex-row w-max h-full items-start relative left-12">
                    <div className="relative top-2">
                        <ClassSummary 
                            averages={averages}
                            school={{'name': school!.name, 'short': school!.short}}
                            numComments={numComments._count}
                            className={_class!.name}
                        />
                        <div className="flex flex-row gap-x-4 justify-center items-start w-max">
                            <CallToAction onClick={() => ""} className="bg-green-300 h-10">
                                Rate
                            </CallToAction>
                            <CallToAction onClick={() => ""} className="bg-blue-300 h-10">
                                Share
                            </CallToAction>
                        </div>
                    </div>
                    <div className="min-w-min flex gap-8 justify-center items-center flex-row">
                        <Chart type="barchart" classes="w-[40rem] h-max" data={distribution} label={`${_class!.name} Grade Distribution`} colors={colors_blue} />
                        <Chart type="piechart" classes="w-[24rem] relative bottom-4 bg-transparent" pieData={averages?.avgBooster ?? 0} />
                    </div>
                </div>
            </ClassHeader>
            <CommentsContainer className="bg-secondary p-16 flex flex-col justify-center items-center text-white w-full">
                <CommentOptionsContainer className="flex flex-row justify-end mb-4 w-[50rem] border-2 border-solid border-blue-500">
                    <CallToAction onClick={() => ""} className="bg-tertiary text-black">Option</CallToAction>

                </CommentOptionsContainer>
                {comments.map((comment: Comment, index: number) => 
                    <div key={index} className="flex flex-col gap-y-12">
                        <Comment comment={comment} />
                    </div>
                )}
            </CommentsContainer>
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