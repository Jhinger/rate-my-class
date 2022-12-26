import Image from "next/image";
import defaultuser from "@/static/defaultuser.png"

import type { Session } from "next-auth";
import type { Maybe } from "@/types";

interface IProfileProps {
    session: Maybe<Session>;
}

const Profile = ({ session }: IProfileProps) => {
    return (
        <div className="relative mr-4">
            <Image
                className="rounded-md duration-200"
                src={session?.user?.image || defaultuser}
                height={35}
                width={35}
                alt={session?.user?.name || "Profile"}
            />
        </div>
    )
}

export default Profile;