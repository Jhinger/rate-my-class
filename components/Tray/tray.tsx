import TrayItem from '@/components/TrayItem'

interface ITrayProps {
    isVisible: boolean;
    children: React.ReactNode;
}

const Tray = ({ isVisible = false, children }: ITrayProps) => {
    return (
        <>
            {isVisible &&
                <div>

                </div>
            }
        </>
    )
}

export default Tray;