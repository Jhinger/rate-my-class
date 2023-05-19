"use client";

import useOnClickOutside from "@/hooks/useOnClickOutside";
import { useState, useRef } from "react";

interface IDialogProps {
    children: React.ReactNode;
}

const Dialog = ({ children }: IDialogProps) => {
    const [dialogOpen, setIsDialogOpen] = useState(true);
    const ref = useRef<HTMLDivElement>(null);

    const closeDialog = () => {
        setIsDialogOpen(false);
    }

    useOnClickOutside(ref, closeDialog);

    return (
        <>
            {dialogOpen 
                ?
                    <div className="fixed top-0 bottom-0 w-full h-screen z-10 flex justify-center items-center">
                        <div className="absolute w-full h-full bg-black opacity-50" />
                        <div ref={ref} className="sticky w-[60rem] h-[40rem] bg-tertiary rounded-md">
                            { children }
                        </div>
                    </div>
                : null
            }
        </>
    )
}

export default Dialog;