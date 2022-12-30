import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import defaultuser from "@/static/defaultuser.png"
import Tray from "@/components/Tray";
import TrayItem from "@/components/TrayItem";
import useOnClickOutside from "@/hooks/useOnClickOutside";

import type { Session } from "next-auth";
import type { Maybe } from "@/types";

interface IProfileProps {
    session: Maybe<Session>;
    onClickTask(): Promise<undefined>;
    className?: string;
}

const Profile = ({ session, className = "", onClickTask }: IProfileProps) => {
    const [isTrayVisible, setIsTrayVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const closeTray = useCallback(() => {
        setIsTrayVisible(false);
    }, []);

    const updateTrayVisibility = () => {
        setIsTrayVisible(!isTrayVisible);
    }

    const stopPropagation = (event: Event)  => {
        event.stopPropagation();
    }

    useOnClickOutside(ref, closeTray);

    return (
        <div 
            ref={ref}
            onClick={updateTrayVisibility}
            className={`${className} flex justify-center`}
        >
            <Image
                className={`unselectable rounded-md duration-200 cursor-pointer ring-2 ring-primary ring-offset-2 ring-offset-secondary hover:ring-white`}
                src={session?.user?.image || defaultuser}
                height={35}
                width={35}
                alt={session?.user?.name || "Profile"}
            />

            <Tray onClick={stopPropagation} isVisible={isTrayVisible} className="absolute top-full mt-2">
                <TrayItem>Testing</TrayItem>
                <TrayItem>Another</TrayItem>
                <TrayItem>Component</TrayItem>
                <TrayItem>Created</TrayItem>
            </Tray>
        </div>
    )
}

export default Profile;