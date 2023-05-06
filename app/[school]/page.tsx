import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { school: string} }): Promise<Metadata | undefined> {
    const { school } = params;

    return {
        title: `RateMyClass - ${school}`,
        description: "Students helping students make informed decisions regarding their class schedule.",
        openGraph: {
          title: `RateMyClass - ${school}`,
          description: "Students helping students make informed decisions regarding their class schedule.",
          type: "website",
          url: `${process.env.NEXTAUTH_URL}/${school}`,
        },
        twitter: {
          card: "summary_large_image",
          title: `RateMyClass - ${school}`,
          description: "Students helping students make informed decisions regarding their class schedule.",
        },
    }
}

export default function SchoolPage() {
    return (
        <div>

        </div>
    )
}