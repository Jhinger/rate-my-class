"use client";

import Tilt from "react-parallax-tilt";
import Image from "next/image";

interface ICardProps {
	imgSrc: string;
	title: string;
	subtext: string;
	className?: string;
}

const Card = ({ imgSrc, title, subtext, className }: ICardProps) => {
	return (
		<Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} tiltReverse={true}>
			<div
				className={`mx-4 flex aspect-square w-72 animate-gradient items-center justify-center rounded-3xl bg-gradient-to-br from-tertiary to-tertiaryComplement shadow-cardOrange sm:w-80 md:w-96`}
			>
				<div
					className={`${className} m-2 flex aspect-square flex-col items-center justify-center rounded-3xl`}
				>
					<Image
						src={imgSrc}
						width={125}
						height={125}
						quality={100}
						priority={true}
						unoptimized
						alt=""
						className="unselectable"
					/>
					<div className="mt-6 flex flex-col items-center justify-center">
						<h2 className="text-xl font-bold tracking-tight text-secondary">
							{title}
						</h2>
						<p className="mx-7 my-2 text-center text-xs font-light sm:text-sm">
							{subtext}
						</p>
					</div>
				</div>
			</div>
		</Tilt>
	);
};

export default Card;
