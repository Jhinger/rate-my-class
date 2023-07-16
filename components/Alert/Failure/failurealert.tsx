
interface IFailureAlertProps {
    text: string;
}

const FailureAlert = ({ text }: IFailureAlertProps) => {
    return (
        <div className="">
            { text }
        </div>
    )
}

export default FailureAlert;