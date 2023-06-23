"use client";

import useOnClickOutside from "@/hooks/useOnClickOutside";
import { useState, useRef, Dispatch, SetStateAction } from "react";

interface IDialogProps {
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Dialog = ({ isOpen, setIsOpen, children }: IDialogProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const closeDialog = () => {
        setIsOpen(false);
    }

    useOnClickOutside(ref, closeDialog);

    return (
        <>
            {isOpen 
                ?
                    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-screen z-10 flex justify-center items-center">
                        <div className="absolute w-full h-full bg-black opacity-50" />
                        <div ref={ref} className="sticky w-min bg-tertiary rounded-md p-12">
                            { children }
                        </div>
                    </div>
                : null
            }
        </>
    )
}

export default Dialog;