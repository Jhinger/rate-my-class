"use client";

import dynamic from "next/dynamic";
import CallToAction from "@/components/Button/CallToAction";
import Dialog from "@/components/Dialog";
import ChartLoading from "@/components/ChartLoading";
import { Clipboard, ClipboardCheck } from "lucide-react";
import { useState } from "react";

import type { Class, School } from "@prisma/client";
const CommentForm = dynamic(() => import("@/components/CommentForm"), {
	loading: () => <ChartLoading />,
});

interface IClassActionProps {
	school: Partial<School> | null;
	schoolClass: Partial<Class> | null;
}

const ClassActions = ({ school, schoolClass }: IClassActionProps) => {
	const [dialogOpen, setIsDialogOpen] = useState(false);
	const [copied, setIsCopied] = useState(false);

	const openDialog = () => {
		setIsDialogOpen(true);
	};

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(window.location.href);
		setIsCopied(true);
	};

	return (
		<div>
			<Dialog isOpen={dialogOpen}>
				<CommentForm
					schoolName={school!.short ?? ""}
					schoolClass={schoolClass}
					setIsOpen={setIsDialogOpen}
				/>
			</Dialog>
			<div className="flex w-max flex-row items-start justify-center gap-x-4">
				<CallToAction
					onClick={openDialog}
					className="h-10 bg-green-300"
				>
					Rate
				</CallToAction>
				<CallToAction
					onClick={copyToClipboard}
					className="h-10 bg-blue-300"
				>
					{copied ? (
						<ClipboardCheck size={15} className="" />
					) : (
						<Clipboard size={15} className="bg-white-500" />
					)}
					<span className="mx-2">{copied ? "Copied" : "Share"}</span>
				</CallToAction>
			</div>
		</div>
	);
};

export default ClassActions;
