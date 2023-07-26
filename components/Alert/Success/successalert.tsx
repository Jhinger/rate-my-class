import { CheckCircle } from "lucide-react";

interface ISuccessAlertProps {
	text: string;
}

const SuccessAlert = ({ text }: ISuccessAlertProps) => {
	return (
		<div className="center fixed left-0 right-0 top-5 flex w-max flex-row items-center justify-center gap-x-2 rounded-md border-2 border-solid border-green-500 bg-green-200 px-64 py-2 text-xs">
			<div className="rounded-full bg-green-400 p-1">
				<CheckCircle size={20} className="text-green-700" />
			</div>
			{text}
		</div>
	);
};

export default SuccessAlert;
