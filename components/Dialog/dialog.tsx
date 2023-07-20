"use client";

import { useRef, Dispatch, SetStateAction, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';

interface IDialogProps {
    children: React.ReactNode;
    isOpen: boolean;
}

const Dialog = ({ isOpen, children }: IDialogProps) => {
    return (
        <AnimatePresence>
            {isOpen 
                ?
                    <motion.div 
                        id='dialog-container' 
                        className="fixed top-0 bottom-0 left-0 right-0 p-10 w-full h-full z-10 flex justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: 'easeInOut', duration: 0.13 }}
                    >
                        <div className="absolute w-full h-full bg-black opacity-50" />
                        <div className="sticky w-min bg-gray-300 rounded-md p-4 h-full overflow-y-scroll scrollbar">
                            { children }
                        </div>
                    </motion.div>
                : null
            }
        </AnimatePresence>
    )
}

export default Dialog;