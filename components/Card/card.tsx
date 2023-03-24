import Image from "next/image";

interface ICardProps {
    imgSrc: string;
    title: string;
    subtext: string;
    className?: string;
}

const Card = ({ imgSrc, title, subtext, className }: ICardProps) => {
    return (
        <div className={`${className} w-[25rem] aspect-square flex justify-center items-center bg-primary mx-6 rounded-3xl`}>
            <div className="flex flex-col justify-center items-center">
                <Image 
                    src={imgSrc}
                    width={175}
                    height={175}
                    quality={100}
                    priority={true}
                    unoptimized
                    alt=""
                />
                <div className="flex flex-col justify-center items-center my-4 font-light">
                    <h5 className="font-bold text-xl">{ title }</h5>
                    <p className="mx-6 text-center my-2">{ subtext }</p>
                </div>
            </div>
        </div>
    )
}

export default Card;