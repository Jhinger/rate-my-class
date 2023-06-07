"use client";

import CallToAction from "@/components/Button/CallToAction";
import Dialog from "@/components/Dialog";

const ClassActions = () => {
    return (
        <div className="flex flex-row gap-x-4 justify-center items-start w-max">
            <CallToAction className="bg-green-300 h-10">
                Rate
            </CallToAction>
            <CallToAction className="bg-blue-300 h-10">
                Share
            </CallToAction>
        </div>
    )
}

export default ClassActions;