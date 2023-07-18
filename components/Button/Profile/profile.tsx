"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

import defaultuser from "@/static/defaultuser.png"
import Tray from "@/components/Tray";
import TrayItem from "@/components/TrayItem";
import useOnClickOutside from "@/hooks/useOnClickOutside";

import type { Session } from "next-auth";
import type { Maybe } from "@/types";

interface IProfileProps {
    session: Maybe<Session>;
    className?: string;
}

const Profile = ({ session, className = "" }: IProfileProps) => {
    const [isTrayVisible, setIsTrayVisible] = useState(false);
    const ref = useRef<HTMLButtonElement>(null);
    const router = useRouter();

    const closeTray = useCallback(() => {
        setIsTrayVisible(false);
    }, []);

    const updateTrayVisibility = () => {
        setIsTrayVisible(!isTrayVisible);
    }

    const stopPropagation = (event: Event)  => {
        event.stopPropagation();
    }

    const openProfile = () => {
        router.push(`/user/${session?.user.id}`);
        setIsTrayVisible(false);
    }

    useOnClickOutside(ref, closeTray);

    return (
        <button 
            ref={ref}
            onClick={updateTrayVisibility}
            className={`${className} flex justify-center w-8`}
        >
            <Image
                className={`unselectable rounded-md duration-200 cursor-pointer ring-2 ring-primary ring-offset-2 ring-offset-secondary hover:ring-tertiary`}
                src={session?.user?.image ?? defaultuser}
                height={35}
                width={35}
                alt={session?.user?.name || "Profile"}
            />

            <Tray onClick={stopPropagation} isVisible={isTrayVisible} className="absolute top-full right-0 mt-2">
                <TrayItem onClick={openProfile} className="animate-fadeDown bg-secondary text-primary text-xs px-4 py-2 my-1.5 font-bold hover:text-white duration-200 ring-2 ring-primary ring-offset-2 ring-offset-secondary hover:ring-white">
                    My Profile
                </TrayItem>
                <TrayItem onClick={() => signOut()} className="animate-fadeDownDelay bg-secondary text-primary text-xs px-4 py-2 my-1.5 font-bold hover:text-red-300 duration-200 ring-2 ring-primary ring-offset-2 ring-offset-secondary hover:ring-red-300">
                    Log Out
                </TrayItem>
            </Tray>
        </button>
    )
}

export default Profile;