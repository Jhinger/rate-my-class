"use client";

import { useRef, Dispatch, SetStateAction, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IDialogProps {
	children: React.ReactNode;
	isOpen: boolean;
}

const Dialog = ({ isOpen, children }: IDialogProps) => {
	return (
		<AnimatePresence>
			{isOpen ? (
				<motion.div
					id="dialog-container"
					className="fixed bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center p-10"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ ease: "easeInOut", duration: 0.13 }}
				>
					<div className="absolute h-full w-full bg-black opacity-50" />
					<div className="scrollbar sticky h-full w-min overflow-y-scroll rounded-md bg-gray-300 p-4">
						{children}
					</div>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
};

export default Dialog;
