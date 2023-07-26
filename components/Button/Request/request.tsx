"use client";

import { useState } from "react";

const Request = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [request, setRequest] = useState("");

	const updateFormVisibility = () => {
		setIsOpen(!isOpen);
	};

	const updateRequest = (newValue: string) => {
		setRequest(newValue);
	};

	const stopPropagation = (event: React.MouseEvent<HTMLFormElement>) => {
		event.stopPropagation();
	};

	return (
		<div
			className="absolute top-0 flex flex-col items-center justify-center"
			onClick={updateFormVisibility}
		>
			<button
				id="request"
				className="w-max rounded-md bg-primary px-24 py-4 text-sm font-semibold duration-300 hover:bg-tertiary"
			>
				REQUEST A SCHOOL / CLASS
			</button>
			{isOpen && (
				<form
					onClick={stopPropagation}
					className="m-2 flex w-full flex-col rounded-md bg-primary p-2"
				>
					<label
						htmlFor="request-input"
						className="m-2 text-xs font-normal"
					>
						Enter a school and optionally a class:
					</label>
					<input
						autoFocus
						id="request-input"
						className="m-2 rounded-sm p-2 ring-2"
						type="text"
						placeholder="ex. Stanford - CS107"
						value={request}
						onChange={(e) => updateRequest(e.target.value)}
					/>
				</form>
			)}
		</div>
	);
};

export default Request;
