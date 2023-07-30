"use client";

import { Rat } from "lucide-react";

interface IEmptyStateProps {
	title: string;
	subtitle?: string;
	callToAction?: () => unknown;
}

const EmptyState = ({ title, subtitle, callToAction }: IEmptyStateProps) => {
	return (
		<div
			className="flex flex-col items-center justify-center text-lightGray opacity-80"
			onClick={callToAction}
		>
			<Rat size={150} className="my-2 animate-gradient text-lightGray" />
			<h3 className="my-2 text-2xl font-black">{title}</h3>
			<div className="text-sm font-extralight">{subtitle}</div>
		</div>
	);
};

export default EmptyState;
