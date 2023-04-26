
interface ICallToActionProps {
    title: string;
    onClick: () => unknown;
    color?: string;
    className?: string;
}

const CallToAction = ({ title, onClick, color, className }: ICallToActionProps) => {
    return (
        <div>
            CTA.
        </div>
    )
}

export default CallToAction;