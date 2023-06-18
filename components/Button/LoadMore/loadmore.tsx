"use client";

import { ChevronDown } from "lucide-react";
import CallToAction from "@/components/Button/CallToAction";

interface ILoadMoreProps {
    type: "directory" | "comment";
    className?: string;
}

const LoadMore = ({ type, className }: ILoadMoreProps) => {
    return (
        <div className={`${className}`}>
            <CallToAction onClick={() => ""} className="bg-primary">
                <ChevronDown size={20} className="relative right-2" />
                <span className="unselectable">Load More</span>
            </CallToAction>
        </div>
    )
}

export default LoadMore;