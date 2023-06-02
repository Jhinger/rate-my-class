import {
  	findSchool,
  	findClass,
  	getComments,
  	getGradeDistribution
} from './actions';

import ClassHeader from '@/components/ClassHeader';
import ClassSummary from '@/components/ClassSummary';
import CallToAction from '@/components/Button/CallToAction';
import Chart from '@/components/Chart';
import Comment from '@/components/Comment';
import CommentsContainer from '@/components/CommentsContainer';
import CommentOptionsContainer from '@/components/CommentOptionsContainer';
import Dialog from '@/components/Dialog';
import { colors_blue } from '@/constants/boosterColors';

import type { Metadata } from "next";
import type { Comment as CommentType } from '@prisma/client';

export async function generateMetadata({ params }: { params: { _class: string; school: string } }): Promise<Metadata | undefined> {
    const { _class, school } = params;

    return {
        title: `RateMyClass - ${_class} (${school})`,
        description: "Students helping students make informed decisions regarding their class schedule.",
        openGraph: {
          title: `RateMyClass - ${_class} (${school})`,
          description: "Students helping students make informed decisions regarding their class schedule.",
          type: "website",
          url: `${process.env.NEXTAUTH_URL}/${school}/${_class}`,
        },
        twitter: {
          card: "summary_large_image",
          title: `RateMyClass - ${_class} (${school})`,
          description: "Students helping students make informed decisions regarding their class schedule.",
        },
    }
}

export default async function ClassPage({ params }: { params: { _class: string; school: string } }) {
	const { school, _class } = params;

    const _school = await findSchool(school);
    const _class_ = await findClass(_school!, _class);
	const [comments, distribution] = await Promise.all([
		getComments(_class_!),
		getGradeDistribution(_class_!)
	]);

	console.log(_class_);
	console.log(comments);
	console.log(distribution);

    return (
        <div>
            <Dialog>
                Yo.
            </Dialog>
            <ClassHeader className="w-full h-full flex justify-center pt-12 pb-24">
                <div className="flex flex-row w-max h-full items-start relative left-12">
                    <div className="relative top-2">
                        <ClassSummary 
                            averages={_class_}
                            school={{'name': _school!.name!, 'short': _school!.short!}}
                            numComments={_class_!.numComments!}
                            className={_class_!.name!}
                        />
                        <div className="flex flex-row gap-x-4 justify-center items-start w-max">
                            <CallToAction className="bg-green-300 h-10">
                                Rate
                            </CallToAction>
                            <CallToAction className="bg-blue-300 h-10">
                                Share
                            </CallToAction>
                        </div>
                    </div>
                    <div className="min-w-min flex gap-8 justify-center items-center flex-row">
                        <Chart type="barchart" classes="w-[40rem] h-max" data={distribution} label={`${_class_!.name} Grade Distribution`} colors={colors_blue} />
                        <Chart type="piechart" classes="w-[24rem] relative bottom-4 bg-transparent" pieData={_class_?.avgBooster ?? 0} />
                    </div>
                </div>
            </ClassHeader>
            <CommentsContainer className="bg-secondary p-16 flex flex-col justify-center items-center text-white w-full">
                <CommentOptionsContainer className="flex flex-row justify-end mb-4 w-[60rem]">
                    <CallToAction className="bg-tertiary text-black h-[2.5rem]">Filter</CallToAction>
                </CommentOptionsContainer>
                <div className="flex flex-col gap-y-12">
                    {comments.map((comment: CommentType, index: number) => 
                        <div key={index}>
                            <Comment comment={comment} />
                        </div>
                    )}
                </div>
            </CommentsContainer>
        </div>
    )
}