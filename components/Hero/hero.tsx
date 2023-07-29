import Image from "next/image";
import logo from "@/static/logo-hero.svg";
import SearchBar from "@/components/SearchBar";

import type { School } from "@prisma/client";

interface IHeroProps {
	schools: Partial<School>[];
	title?: string;
	subtitle?: string;
}

const Hero = ({
	title = "RateMyClass",
	subtitle = "Search for your School:",
	schools,
}: IHeroProps) => {
	return (
		<header className="flex h-[35rem] w-full flex-col items-center justify-center">
			<div className="relative -top-10 flex flex-col">
				<div className="flex flex-col items-center justify-center">
					<div className="flex flex-row items-center">
						<Image
							className="unselectable"
							src={logo}
							width={35}
							height={30}
							quality={100}
							alt=""
							priority={true}
						/>
						<h1 className="animate-gradient bg-gradient-to-r from-primary via-tertiaryAccent to-tertiary bg-clip-text px-2 text-[5.5rem] font-extrabold tracking-tightest text-transparent">
							{title}
						</h1>
					</div>
					<h5 className="font-base text-sm text-white">{subtitle}</h5>
				</div>
				<div className="relative m-4">
					<SearchBar
						options={schools}
						placeholder={`ex. 'Simon Fraser University' or 'SFU'`}
						className="w-[60rem]"
					/>
				</div>
				<div className="text-center text-xs font-extralight text-white">
					Can&lsquo;t find your school? Request it to be{" "}
					<a
						href="#request"
						className="text-blue-400 hover:cursor-pointer hover:text-tertiary"
					>
						added here
					</a>
					.
				</div>
			</div>
		</header>
	);
};

export default Hero;
