"use client";

import CallToAction from "@/components/Button/CallToAction";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

const SchoolNotFound = () => {
	const router = useRouter();

	const onClick = () => {
		router.push("/");
	};

	return (
		<div className="flex min-h-[30rem] flex-col items-center justify-center">
			<span className="animate-gradient bg-gradient-to-r from-primary via-tertiaryAccent to-tertiary bg-clip-text text-8xl font-black text-lightGray text-transparent drop-shadow-lg">
				<span>404</span>
			</span>
			<h1 className="font-lg my-6 text-3xl font-semibold tracking-tightest text-lightGray">
				Sorry, this School and/or Class was not found.
			</h1>
			<CallToAction
				onClick={onClick}
				className="w-max gap-3 bg-primary font-light"
			>
				<Search size={17} />
				<span>Find your School</span>
			</CallToAction>
		</div>
	);
};

export default SchoolNotFound;
