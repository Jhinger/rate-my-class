import { GithubIcon, LinkedinIcon, InstagramIcon } from "lucide-react";
import Home from "@/components/Home";
import Profile from "@/components/Button/Profile";
import SignIn from "@/components/Button/SignIn";
import Icon from "@/components/Icon";

import type { Session } from "next-auth";

interface IPrimaryNavbarProps {
	session: Session | null;
}

const PrimaryNavbar = ({ session }: IPrimaryNavbarProps) => {
	const relevantStatusComponent = (session: Session | null) => {
		if (session?.user !== undefined) {
			return <Profile session={session} className="relative right-7" />;
		}
		return <SignIn className="relative right-4" />;
	};

	return (
		<div className="relative mb-2 mt-2 w-full">
			<nav className="center flex max-w-[2100px] items-center justify-between">
				<Home />

				<div className="invisible flex flex-row space-x-10 md:visible">
					<Icon
						icon={<GithubIcon size={22} />}
						href="#"
						className="unselectable text-primary duration-150 hover:text-tertiary"
					/>
					<Icon
						icon={<LinkedinIcon size={22} />}
						href="#"
						className="unselectable text-primary duration-150 hover:text-tertiary"
					/>
					<Icon
						icon={<InstagramIcon size={22} />}
						href="#"
						className="unselectable text-primary duration-150 hover:text-tertiary"
					/>
				</div>

				<ul className="invisible flex flex-row space-x-10 font-medium text-primary md:visible">
					<li className="cursor-pointer duration-150 hover:text-tertiary">
						contact
					</li>
					<li className="cursor-pointer duration-150 hover:text-tertiary">
						about
					</li>
				</ul>

				{relevantStatusComponent(session)}
			</nav>
		</div>
	);
};

export default PrimaryNavbar;
