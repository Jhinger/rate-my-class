import { GetServerSidePropsContext, InferGetServerSidePropsType, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

const Class = ({ classID }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <div>
            { classID }
        </div>
    )
}

export default Class;

export async function getServerSideProps<Q extends ParsedUrlQuery, D extends PreviewData>(context: GetServerSidePropsContext<Q, D>) {
    const params = context.params!;
    const classID = params.class;

    return {
        props: {
            classID
        }
    }
}