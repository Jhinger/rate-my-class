import Card from "@/components/Card"
import { cards } from "@/util/getCardProps";

const Features = () => {
    const [ card1, card2, card3 ] = cards;

    return (
        <div className="w-full h-[35rem] bg-secondary flex flex-row justify-center items-center">
            <Card imgSrc={card1.imgSrc} title={card1.title} subtext={card1.subtext} className="" />
            <Card imgSrc={card2.imgSrc} title={card2.title} subtext={card2.subtext} className="" />
            <Card imgSrc={card3.imgSrc} title={card3.title} subtext={card3.subtext} className="" />
        </div>
    )
}

export default Features;