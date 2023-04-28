import SEO from "@/components/SEO";
import ProgressBar from "@/components/ProgressBar";
import { GetServerSidePropsContext, InferGetServerSidePropsType, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

const Class = ({ classID, schoolID }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <div>
            <SEO title={`RateMyClass - ${classID} (${schoolID})`} />
            { classID }
            { schoolID }

            <ProgressBar percent={3.5} maxPercent={5} color="bg-tertiary" textColor="text-tertiary"/>
        </div>
    )
}

export default Class;

export async function getServerSideProps<Q extends ParsedUrlQuery, D extends PreviewData>(context: GetServerSidePropsContext<Q, D>) {
    const params = context.params!;
    const classID = params.class;
    const schoolID = params.school;

    return {
        props: {
            classID,
            schoolID
        }
    }
}