import {
  	findSchool,
  	findClass,
  	findAverages,
  	getComments,
  	getGradeDistribution
} from './actions';
import { Metadata } from "next"

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

	const [_school, _class_] = await Promise.all([findSchool(school), findClass(_class)]);
	const [averages, comments, distribution] = await Promise.all([
		findAverages(_school!),
		getComments(_class_!),
		getGradeDistribution(_class_!)
	]);

	console.log(averages);
	console.log(comments);
	console.log(distribution);

    return (
        <div>
            Class Page
        </div>
    )
}