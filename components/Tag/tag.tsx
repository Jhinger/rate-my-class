
interface ITagProps {
    className: string;
    children: React.ReactNode;
    [rest: string]: any;
}

const Tag = ({ className, children, ...props }: ITagProps) => {
    return (
        <div {...props} className={`${className} w-max h-max rounded-sm flex justify-center items-center text-xs font-semibold px-2 py-1`}>
            { children }
        </div>
    )
}

export default Tag;