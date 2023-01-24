import { GetServerSidePropsContext, InferGetServerSidePropsType, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

const SchoolIndex = ({ school }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <div>
            { school } 
        </div>
    )
}

export default SchoolIndex;

export async function getServerSideProps<Q extends ParsedUrlQuery, D extends PreviewData>(context: GetServerSidePropsContext<Q, D>) {
    const params = context.params!;
    const school = params.school;

    return {
        props: { school }
    }
}