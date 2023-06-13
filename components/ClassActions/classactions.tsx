"use client";

import CallToAction from "@/components/Button/CallToAction";
import Dialog from "@/components/Dialog";
import CommentForm from "@/components/CommentForm";
import { useState } from "react";

const ClassActions = () => {
    const [dialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => {
        setIsDialogOpen(true);
    }

    return (
        <div className="">
            <Dialog isOpen={dialogOpen} setIsOpen={setIsDialogOpen}>
                
            </Dialog>
            <div className="flex flex-row gap-x-4 justify-center items-start w-max">
                <CallToAction onClick={openDialog} className="bg-green-300 h-10">
                    Rate
                </CallToAction>
                <CallToAction className="bg-blue-300 h-10">
                    Share
                </CallToAction>
            </div>
        </div>
    )
}

export default ClassActions;