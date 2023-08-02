"use client";

import useAlert from "@/hooks/useAlert";
import { FormEvent, useState } from "react";

const Request = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [request, setRequest] = useState("");
	const { setAlert } = useAlert();

	const updateFormVisibility = () => {
		setIsOpen(!isOpen);
	};

	const updateRequest = (newValue: string) => {
		setRequest(newValue);
	};

	const stopPropagation = (event: React.MouseEvent<HTMLFormElement>) => {
		event.stopPropagation();
	};

	const warnAndClose = (message: string) => {
		setAlert(message, "failure");
		setIsOpen(false);
	};

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const res = await fetch("/api/request/", {
				method: "POST",
				body: JSON.stringify({ schoolRequest: request }),
			});

			if (res.ok) {
				const data = await res.json();
				switch (data.status) {
					case 201: {
						setAlert(
							"Thank you - Requested School/Class",
							"success",
						);
						setIsOpen(false);
						return;
					}
					case 401: {
						return warnAndClose(data.error);
					}
					case 403: {
						return warnAndClose(data.error);
					}
					case 500: {
						return warnAndClose(data.error);
					}
				}
			}
		} catch (err) {
			if (err instanceof Error) {
				return setAlert(err.message, "failure");
			}
			return setAlert("Failed to request School/Class", "failure");
		}
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
					onSubmit={(e) => onSubmit(e)}
					className="m-2 flex w-full flex-col rounded-md bg-primary p-2"
				>
					<label
						htmlFor="request-input"
						className="relative m-2 text-xs font-normal"
					>
						Enter a school and optionally a class:
						<span className="absolute bottom-0 right-0 top-0 text-xxxs font-semibold text-red-500">
							{request.length ? `${request.length} / 30` : ""}
						</span>
					</label>
					<input
						autoFocus
						id="schoolRequest"
						className="m-2 rounded-sm p-2 ring-2"
						type="text"
						placeholder="ex. Stanford - CS107"
						value={request}
						maxLength={30}
						onChange={(e) => updateRequest(e.target.value)}
					/>
				</form>
			)}
		</div>
	);
};

export default Request;
