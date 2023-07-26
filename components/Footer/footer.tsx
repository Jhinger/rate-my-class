"use client";

import Image from "next/image";
import logo from "@/static/logo-hero.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IFooterProps {
	className?: string;
}

const Footer = ({ className }: IFooterProps) => {
	const currentYear = new Date().getFullYear();
	const path = usePathname();

	const styles =
		path === "/" ? "bg-secondary h-[20rem] pb-6" : "bg-secondary p-10";

	return (
		<div
			className={`${styles} ${className} flex flex-col items-center justify-end text-white`}
		>
			<div className="flex w-max flex-col items-center justify-center border-b-2 border-solid border-primary">
				<div className="flex flex-row">
					<div className="mx-8 flex flex-col text-primary">
						<span className="my-2 font-black">SITE</span>
						<Link
							href="/about"
							className="text-sm font-extralight duration-100 hover:text-tertiary"
						>
							about
						</Link>
						<Link
							href="/contact"
							className="text-sm font-extralight duration-100 hover:text-tertiary"
						>
							contact
						</Link>
						<Link
							href="/faq"
							className="text-sm font-extralight duration-100 hover:text-tertiary"
						>
							FAQ
						</Link>
					</div>
					<div className="mx-8 flex flex-col text-primary">
						<span className="my-2 font-black">LEGAL</span>
						<Link
							href="/terms"
							className="text-sm font-extralight duration-100 hover:text-tertiary"
						>
							terms & conditions
						</Link>
						<Link
							href="privacy-policy"
							className="text-sm font-extralight duration-100 hover:text-tertiary"
						>
							privacy policy
						</Link>
						<Link
							href="site-guidelines"
							className="text-sm font-extralight duration-100 hover:text-tertiary"
						>
							site guidelines
						</Link>
					</div>
					<div className="mx-8 flex flex-col text-primary">
						<span className="my-2 font-black">FOLLOW US</span>
						<Link
							href="#"
							className="text-sm font-extralight duration-100 hover:text-tertiary"
						>
							LinkedIn
						</Link>
						<Link
							href="#"
							className="text-sm font-extralight duration-100 hover:text-tertiary"
						>
							GitHub
						</Link>
						<Link
							href="#"
							className="text-sm font-extralight duration-100 hover:text-tertiary"
						>
							Instagram
						</Link>
						<Link
							href="#"
							className="text-sm font-extralight duration-100 hover:text-tertiary"
						>
							Twitter
						</Link>
					</div>
				</div>
				<div className="my-4 flex flex-row items-center">
					<Image
						className="unselectable"
						src={logo}
						width={15}
						height={15}
						quality={100}
						alt=""
						priority={true}
					/>
					<div className="animate-gradient bg-gradient-to-r from-primary via-tertiaryAccent to-tertiary bg-clip-text pr-2 text-4xl font-extrabold tracking-tightest text-transparent">
						RateMyClass
					</div>
				</div>
			</div>
			<div className="mt-4 text-xs text-primary">
				Copyright &copy; 2022 - {currentYear} RateMyClass
			</div>
		</div>
	);
};

export default Footer;
