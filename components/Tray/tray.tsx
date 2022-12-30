import TrayItem from '@/components/TrayItem'

interface ITrayProps {
    isVisible: boolean;
    children: React.ReactNode;
    className?: string;
}

const Tray = ({ isVisible, children, className="" }: ITrayProps) => {
    return (
        <>
            {isVisible &&
                <menu className={`${className} flex flex-col w-max bg-primary aspect-square`}>
                    { children }
                </menu>
            }
        </>
    )
}

export default Tray;