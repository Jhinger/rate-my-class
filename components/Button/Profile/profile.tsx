"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

import defaultuser from "@/static/defaultuser.png";
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
	};

	const stopPropagation = (event: Event) => {
		event.stopPropagation();
	};

	const openProfile = () => {
		router.push(`/user/${session?.user.id}`);
		setIsTrayVisible(false);
	};

	useOnClickOutside(ref, closeTray);

	return (
		<button
			ref={ref}
			onClick={updateTrayVisibility}
			className={`${className} flex w-8 justify-center`}
		>
			<Image
				className={`unselectable cursor-pointer rounded-md ring-2 ring-primary ring-offset-2 ring-offset-secondary duration-200 hover:ring-tertiary`}
				src={session?.user?.image ?? defaultuser}
				height={35}
				width={35}
				alt={session?.user?.name || "Profile"}
			/>

			<Tray
				onClick={stopPropagation}
				isVisible={isTrayVisible}
				className="absolute right-0 top-full mt-2"
			>
				<TrayItem
					onClick={openProfile}
					className="my-1.5 animate-fadeDown bg-secondary px-4 py-2 text-xs font-bold text-primary ring-2 ring-primary ring-offset-2 ring-offset-secondary duration-200 hover:text-white hover:ring-white"
				>
					My Profile
				</TrayItem>
				<TrayItem
					onClick={() => signOut()}
					className="my-1.5 animate-fadeDownDelay bg-secondary px-4 py-2 text-xs font-bold text-primary ring-2 ring-primary ring-offset-2 ring-offset-secondary duration-200 hover:text-red-300 hover:ring-red-300"
				>
					Log Out
				</TrayItem>
			</Tray>
		</button>
	);
};

export default Profile;
