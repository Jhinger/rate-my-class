import Image from "next/image";
import defaultuser from "@/static/defaultuser.png"

import type { Session } from "next-auth";
import type { Maybe } from "@/types";

interface IProfileProps {
    session: Maybe<Session>;
    onClickTask(): Promise<undefined>;
}

const Profile = ({ session, onClickTask }: IProfileProps) => {
    return (
        <div onClick={onClickTask}>
            <Image
                className="unselectable rounded-md duration-200 cursor-pointer ring-2 ring-primary ring-offset-2 ring-offset-secondary hover:ring-white"
                src={session?.user?.image || defaultuser}
                height={35}
                width={35}
                alt={session?.user?.name || "Profile"}
            />
        </div>
    )
}

export default Profile;