import Link from "next/link";

interface IIconProps {
	icon: React.ReactNode;
	href?: string;
	className?: string;
}

const Icon = ({ icon, href, className }: IIconProps) => {
	return (
		<>
			{href ? (
				<Link className={className} href={href}>
					{" "}
					{icon}{" "}
				</Link>
			) : (
				<div className={className}> {icon} </div>
			)}
		</>
	);
};

export default Icon;
