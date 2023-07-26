import { AlertCircle } from "lucide-react";

interface IFailureAlertProps {
	text: string;
}

const FailureAlert = ({ text }: IFailureAlertProps) => {
	return (
		<div className="center fixed left-0 right-0 top-5 flex w-max flex-row items-center justify-center gap-x-2 rounded-md border-2 border-solid border-red-500 bg-red-200 px-64 py-2 text-xs">
			<div className="rounded-full bg-red-400 p-1">
				<AlertCircle size={20} className="text-red-700" />
			</div>
			{text}
		</div>
	);
};

export default FailureAlert;
