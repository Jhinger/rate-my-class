import Card from "@/components/Card";
import { cards } from "@/util/getCardProps";

const Features = () => {
	const [card1, card2, card3] = cards;

	return (
		<div className="flex h-max w-full flex-col items-center justify-center gap-x-4 gap-y-8 bg-secondary pt-16 sm:flex-row sm:flex-wrap">
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
