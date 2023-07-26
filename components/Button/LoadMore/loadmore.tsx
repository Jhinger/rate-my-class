"use client";

import { ChevronDown } from "lucide-react";
import CallToAction from "@/components/Button/CallToAction";

interface ILoadMoreProps {
	onClick?: () => unknown;
	className?: string;
}

const LoadMore = ({ onClick, className }: ILoadMoreProps) => {
	return (
		<div className={`${className}`} onClick={onClick}>
			<CallToAction onClick={() => ""} className="bg-primary">
				<ChevronDown size={20} className="relative right-2" />
				<span className="unselectable">Load More</span>
			</CallToAction>
		</div>
	);
};

export default LoadMore;
