import Card from "@/components/Card";
import { cards } from "@/util/getCardProps";

const Features = () => {
	const [card1, card2, card3] = cards;

	return (
		<div className="flex h-[35rem] w-full flex-row items-center justify-center bg-secondary">
			<Card
				imgSrc={card1.imgSrc}
				title={card1.title}
				subtext={card1.subtext}
				className="bg-primary"
			/>
			<Card
				imgSrc={card2.imgSrc}
				title={card2.title}
				subtext={card2.subtext}
				className="bg-primary"
			/>
			<Card
				imgSrc={card3.imgSrc}
				title={card3.title}
				subtext={card3.subtext}
				className="bg-primary"
			/>
		</div>
	);
};

export default Features;
