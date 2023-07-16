import { AlertCircle } from "lucide-react";

interface IFailureAlertProps {
    text: string;
}

const FailureAlert = ({ text }: IFailureAlertProps) => {
    return (
        <div className="fixed flex flex-row justify-center items-center gap-x-2 text-xs top-5 left-0 right-0 center w-max rounded-md py-2 px-64 bg-red-200 border-2 border-solid border-red-500">
            <div className="bg-red-400 rounded-full p-1">
                <AlertCircle size={20} className="text-red-700" />
            </div>
            { text }
        </div>
    )
}

export default FailureAlert;