import { CheckCircle } from "lucide-react";

interface ISuccessAlertProps {
    text: string;
}

const SuccessAlert = ({ text }: ISuccessAlertProps) => {
    return (
        <div className="fixed flex flex-row justify-center items-center gap-x-2 text-xs top-4 left-0 right-0 center w-max rounded-md py-2 px-64 bg-green-200 border-2 border-solid border-green-500">
            <div className="bg-green-400 rounded-full p-1">
                <CheckCircle size={20} className="text-green-700" />
            </div>
            { text }
        </div>
    )
}

export default SuccessAlert;