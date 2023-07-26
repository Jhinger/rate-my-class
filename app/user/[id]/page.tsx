import prisma from "@/lib/prismadb";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import UserComments from "@/components/UserComments";
import { MAX_COMMENTS } from "@/constants";
import Image from "next/image";
import defaultuser from "@/public/static/defaultuser.png";

async function getUserComments(id: string) {
	const comments = await prisma.comment.findMany({
		where: {
			userId: id,
			deleted: false,
		},
		take: MAX_COMMENTS,
		orderBy: {
			createdAt: "desc",
		},
	});

	return comments;
}

const UserPage = async ({ params }: { params: { id: string } }) => {
	const session = await getServerSession(authOptions);

	const { id } = params;
	if (!session || session.user.id !== id) {
		redirect("/");
	}

	const userComments = await getUserComments(id);

	return (
		<div className="">
			<div className="flex h-[15rem] flex-row items-center justify-center gap-10">
				<Image
					src={session.user.image ?? defaultuser}
					alt=""
					width={100}
					height={100}
					quality={100}
					className="rounded-lg border-4 border-primary"
				/>
				<div className="flex flex-col items-start justify-center gap-1 text-white">
					<div className="text-3xl font-bold">
						{session.user.name ?? "Your Profile"}
					</div>
					<div className="text-sm font-extralight">
						{session.user.email}
					</div>
				</div>
			</div>
			<div className="mb-24 flex h-max w-full items-center justify-center">
				<div>
					<hr className="w-full border-primary pb-10" />
					<UserComments
						userComments={userComments}
						userId={session.user.id}
					/>
				</div>
			</div>
		</div>
	);
};

export default UserPage;
