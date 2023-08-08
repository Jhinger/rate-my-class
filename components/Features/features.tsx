import Card from "@/components/Card";
import { cards } from "@/util/getCardProps";

const Features = () => {
	return (
		<div className="flex h-max w-full flex-col items-center justify-center gap-x-4 gap-y-8 bg-secondary py-16 sm:flex-row sm:flex-wrap">
			{...cards.map((card, key) => (
				<Card
					key={key}
					imgSrc={card.imgSrc}
					title={card.title}
					subtext={card.subtext}
					className="bg-primary"
				/>
			))}
		</div>
	);
};

export default Features;
