
interface ITagProps {
    className: string;
    children: React.ReactNode;
}

const Tag = ({ className, children }: ITagProps) => {
    return (
        <div className={`${className} w-max h-max rounded-sm flex justify-center items-center text-xs font-semibold px-2 py-1`}>
            { children }
        </div>
    )
}

export default Tag;