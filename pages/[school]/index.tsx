import Head from "next/head";
import { GetServerSidePropsContext, InferGetServerSidePropsType, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

const SchoolIndex = ({ school }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Head>
				<title>RateMyClass - { school }</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content={`${school}`}/>
				<link rel="icon" href="/static/logo-2.svg" sizes='16x16'/>
			</Head>

            <div>
                { school } 
            </div>
        </>
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