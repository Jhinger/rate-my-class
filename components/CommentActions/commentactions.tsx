"use client";

import { useState, useRef } from "react";
import Tray from "@/components/Tray";
import TrayItem from "@/components/TrayItem";
import Icon from "@/components/Button/Icon";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import useAlert from "@/hooks/useAlert";
import LoadingSpinner from "@/components/LoadingSpinner";
import { usePathname } from "next/navigation";
import { MoreVerticalIcon } from "lucide-react";

import type { Comment } from "@prisma/client";

type CommentActionProps = Pick<Comment, "classId" | "id" | "userId">;

const CommentActions = ({ classId, id, userId }: CommentActionProps) => {
	const { setAlert } = useAlert();
	const [isTrayVisible, setIsTrayVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	const isOnUserRoute = pathname.startsWith("/user/");

	const reportComment = async () => {
		const res = await fetch("/api/report/comment", {
			method: "POST",
			body: JSON.stringify({
				classId: classId,
				commentId: id,
				userId: userId,
			}),
		});

		if (res.ok) {
			const data = await res.json();
			switch (data.status) {
				case 200:
					return;
				case 401: {
					return new Error(data.error);
				}
				case 403: {
					return new Error(data.error);
				}
				case 500: {
					return new Error(data.error);
				}
				default: {
					return new Error("5XX - Failed to report rating.");
				}
			}
		} else {
			throw new Error("4XX - Failed to report rating.");
		}
	};

	const deleteComment = async () => {
		const res = await fetch("/api/delete/comment", {
			method: "POST",
			body: JSON.stringify({
				classId: classId,
				userId: userId,
				commentId: id,
			}),
		});

		if (res.ok) {
			const data = await res.json();
			switch (data.status) {
				case 200:
					return;
				case 401: {
					return new Error(data.error);
				}
				case 403: {
					return new Error(data.error);
				}
				case 500: {
					return new Error(data.error);
				}
				default: {
					return new Error("5XX - Failed to delete rating");
				}
			}
		} else {
			throw new Error("4XX - Failed to delete rating.");
		}
	};

	const toggleTrayVisibility = () => {
		setIsTrayVisible(!isTrayVisible);
	};

	const onReportClick = async () => {
		setIsLoading(true);
		const res = await reportComment();
		if (res instanceof Error) {
			setAlert(res.message, "failure");
			setIsTrayVisible(false);
			setIsLoading(false);
			return;
		}
		setAlert("Thank You - The Rating has been reported", "success");
		setIsTrayVisible(false);
		setIsLoading(false);
	};

	const onDeleteClick = async () => {
		setIsLoading(true);
		const res = await deleteComment();
		if (res instanceof Error) {
			setAlert(res.message, "failure");
			setIsTrayVisible(false);
			return;
		}
		setAlert("Your Rating has been deleted.", "success");
		setIsTrayVisible(false);
		setIsLoading(false);
	};

	useOnClickOutside(ref, () => setIsTrayVisible(false));

	return (
		<div ref={ref} className="relative">
			<div onClick={toggleTrayVisibility}>
				<Icon>
					<MoreVerticalIcon
						size={20}
						className="unselectable duration-100 hover:cursor-pointer hover:text-blue-500"
					/>
				</Icon>
			</div>

			<Tray
				isVisible={isTrayVisible}
				className="absolute right-0 top-full z-10 my-1"
			>
				{isOnUserRoute ? (
					<TrayItem
						onClick={onDeleteClick}
						className="unselectable my-1.5 animate-fadeDown bg-secondary px-4 py-2 text-xs font-bold text-primary ring-2 ring-primary ring-offset-2 ring-offset-secondary duration-200 hover:text-red-400 hover:ring-red-400"
					>
						{isLoading ? (
							<LoadingSpinner className="w-4" />
						) : (
							"Delete"
						)}
					</TrayItem>
				) : (
					<TrayItem
						onClick={onReportClick}
						className="unselectable my-1.5 animate-fadeDown bg-secondary px-4 py-2 text-xs font-bold text-primary ring-2 ring-primary ring-offset-2 ring-offset-secondary duration-200 hover:text-red-400 hover:ring-red-400"
					>
						{isLoading ? (
							<LoadingSpinner className="w-4" />
						) : (
							"Report"
						)}
					</TrayItem>
				)}
			</Tray>
		</div>
	);
};

export default CommentActions;
