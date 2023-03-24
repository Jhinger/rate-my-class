import Card from "@/components/Card"
import { cards } from "@/util/getCardProps";

const Features = () => {

    const renderCards = cards.map((card, index) => (
        <div key={index}>
            <Card imgSrc={card.imgSrc} title={card.title} subtext={card.subtext} />
        </div>
    ))

    return (
        <div className="w-full h-[35rem] bg-secondary flex flex-row justify-center items-center">
            { renderCards }
        </div>
    )
}

export default Features;