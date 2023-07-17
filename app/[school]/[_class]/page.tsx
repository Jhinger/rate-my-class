import {
  	findSchool,
  	findClass,
    getComments,
  	getGradeDistribution
} from './actions';

import ClassHeader from '@/components/ClassHeader';
import ClassSummary from '@/components/ClassSummary';
import ClassActions from '@/components/ClassActions';
import CallToAction from '@/components/Button/CallToAction';
import DisplayComments from '@/components/DisplayComments';
import Chart from '@/components/Chart';
import CommentsContainer from '@/components/CommentsContainer';
import CommentOptionsContainer from '@/components/CommentOptionsContainer';
import { colors_blue } from '@/constants/boosterColors';

import type { Metadata } from "next";

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

const getTest = async () => {
    const res = await fetch(process.env.URL + '/api/school/SFU', {
        method: "GET",
    })

    if (res.ok) return res.json();
    return new Error("Error fetching api.");
}

export default async function ClassPage({ params }: { params: { _class: string; school: string } }) {
	const { school, _class } = params;

    const _school = await findSchool(school);
    const _class_ = await findClass(_school!, _class);
	const [comments, distribution] = await Promise.all([
		getComments(_class_!),
		getGradeDistribution(_class_!)
	]);

    const test = await getTest();

    console.log(test);
    console.log(comments);
	console.log(_class_);
	console.log(distribution);

    return (
        <div>
            <ClassHeader className="w-full h-full flex justify-center pt-12 pb-24">
                <div className="flex flex-row w-max h-full items-start relative left-12">
                    <div className="relative top-2">
                        <ClassSummary 
                            averages={_class_}
                            school={{'name': _school!.name!, 'short': _school!.short!}}
                            numComments={_class_!.numComments!}
                            className={_class_!.name!}
                        />
                        <div className="w-max">
                            <ClassActions school={_school} schoolClass={_class_} />
                        </div>
                    </div>
                    <div className="min-w-min flex gap-8 justify-center items-center flex-row">
                        <Chart type="barchart" classes="w-[40rem] h-max" data={distribution} label={`${_class_!.name} Grade Distribution`} colors={colors_blue} />
                        <Chart type="piechart" classes="w-[24rem] relative bottom-4 bg-transparent" pieData={_class_?.avgBooster ?? 0} />
                    </div>
                </div>
            </ClassHeader>
            <CommentsContainer className="bg-secondary py-16 flex flex-col justify-center items-center text-white w-full">
                <CommentOptionsContainer className="flex flex-row justify-end mb-4 w-[65rem]">
                    <CallToAction className="bg-primary text-black h-[2.5rem]">Filter</CallToAction>
                </CommentOptionsContainer>
                <DisplayComments schoolName={_school!.short!} _class={_class_!} _comments={comments} />
            </CommentsContainer>
        </div>
    )
}