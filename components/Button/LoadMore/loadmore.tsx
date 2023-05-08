"use client";

import { ChevronDown } from "lucide-react";
import CallToAction from "../CallToAction";

interface ILoadMoreProps {
    type: "directory" | "comment";
}

const LoadMore = ({ type }: ILoadMoreProps) => {
    return (
        <>
            <CallToAction onClick={() => ""} className="bg-primary">
                <ChevronDown size={20} className="relative right-2" />
                <span className="unselectable">Load More</span>
            </CallToAction>
        </>
    )
}

export default LoadMore;