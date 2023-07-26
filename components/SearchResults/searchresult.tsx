"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import type { UntypedObject } from "@/types/";

interface ISearchResultProps {
	results: UntypedObject[];
	numResults: number;
	cursor: number;
	onHover: (result: any) => void;
	className?: string;
}

const SearchResult = ({
	cursor,
	results,
	numResults,
	onHover,
	className,
}: ISearchResultProps) => {
	const pathname = usePathname();

	const renderResults = results.slice(0, numResults).map((result, index) => {
		const cursorClass =
			cursor === index ? "bg-gray-200 text-black rounded-md" : "";
		const nextRoute = result.short ?? result.name;
		const path = pathname === "/" ? "" : pathname;

		return (
			<div
				key={index}
				onMouseEnter={() => onHover(result)}
				className={`${cursorClass} h-full w-full px-2 py-2 indent-2 text-sm text-gray-500 duration-100 hover:cursor-pointer hover:rounded-md hover:bg-gray-200 hover:text-black`}
			>
				<Link href={`${path}/${nextRoute}`}>{result.name}</Link>
			</div>
		);
	});

	return (
		<>
			{results.length !== 0 && (
				<div
					className={`${className} z-10 mt-4 w-full rounded-md bg-white ring-2 ring-primary ring-offset-2 ring-offset-secondary backdrop-blur-lg hover:ring-tertiary`}
				>
					{renderResults}
				</div>
			)}
		</>
	);
};

export default SearchResult;
