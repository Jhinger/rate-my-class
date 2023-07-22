import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const UserIndexPage = async () => {
    const session = await getServerSession(authOptions);

    session
        ? redirect(`/user/${session.user.id}`)
        : redirect('/api/auth/signin')

    return null;
}

export default UserIndexPage;