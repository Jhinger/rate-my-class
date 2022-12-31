import TrayItem from '@/components/TrayItem'

interface ITrayProps {
    isVisible: boolean;
    children: React.ReactNode;
    className?: string;
    [rest: string]: any;
}

const Tray = ({ isVisible, children, className="", ...props }: ITrayProps) => {
    return (
        <>
            {isVisible &&
                <menu {...props} className={`${className} flex flex-col w-max h-max`}>
                    { children }
                </menu>
            }
        </>
    )
}

export default Tray;