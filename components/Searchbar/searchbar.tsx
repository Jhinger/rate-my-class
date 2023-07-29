"use client";

import React, { ChangeEvent, useState } from "react";
import { ARROW_DOWN, ARROW_UP, ENTER } from "@/constants/";
import SearchResults from "@/components/SearchResults";
import { usePathname, useRouter } from "next/navigation";

import type { UntypedObject } from "@/types/";

interface ISearchBarProps {
	options: UntypedObject[];
	placeholder: string;
	className: string;
	numVisibleOptions?: number;
}

const SearchBar = ({
	options,
	numVisibleOptions = 5,
	placeholder,
	className,
}: ISearchBarProps) => {
	const [filteredOptions, setFilteredOptions] = useState<UntypedObject[]>([]);
	const [userInput, setUserInput] = useState("");
	const [cursor, setCursor] = useState(0);

	const router = useRouter();
	const pathname = usePathname();

	const handleChange = (e: ChangeEvent<HTMLInputElement>): undefined => {
		const input = e.target.value;
		setUserInput(input);

		if (!input.length) {
			setFilteredOptions([]);
			setCursor(0);
			return;
		}

		const newFilter = options.filter((option) => {
			for (const key in option) {
				if (option[key].toLowerCase().includes(input.toLowerCase())) {
					return true;
				}
			}

			return false;
		});

		setFilteredOptions(newFilter);
	};

	function onEnter(event: React.KeyboardEvent<HTMLDivElement>) {
		if (event.key === ENTER && filteredOptions.length) {
			const nextRoute =
				filteredOptions[cursor].short ?? filteredOptions[cursor].name;
			const path = pathname === "/" ? "" : pathname;
			router.push(`${path}/${nextRoute}`);
		}
	}

	function onArrowUp(event: React.KeyboardEvent<HTMLDivElement>) {
		if (event.key === ARROW_UP && filteredOptions.length) {
			setCursor((prevState) => (prevState > 0 ? prevState - 1 : 0));
		}
	}

	function onArrowDown(event: React.KeyboardEvent<HTMLDivElement>) {
		if (event.key === ARROW_DOWN && filteredOptions.length) {
			setCursor((prevState) =>
				prevState < Math.min(filteredOptions.length, 5) - 1
					? prevState + 1
					: prevState,
			);
		}
	}

	function onHover(result: any) {
		if (filteredOptions.length) {
			setCursor(filteredOptions.indexOf(result) || 0);
		}
	}

	function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
		onEnter(event);
		onArrowDown(event);
		onArrowUp(event);
	}

	return (
		<div className="relative shadow-searchBlue">
			<input
				autoFocus
				type="text"
				className={`${className} rounded-md bg-white px-4 py-2 text-sm ring-2 ring-primary ring-offset-2 ring-offset-secondary duration-100 hover:ring-tertiary focus:outline-none`}
				placeholder={placeholder}
				value={userInput}
				onChange={handleChange}
				onKeyDown={onKeyDown}
			/>
			<div>
				<SearchResults
					className="absolute"
					cursor={cursor}
					results={filteredOptions}
					numResults={numVisibleOptions}
					onHover={onHover}
				/>
			</div>
		</div>
	);
};

export default SearchBar;
