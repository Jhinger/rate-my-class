import Tilt from 'react-parallax-tilt'
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
            <div className={`${className} w-[25rem] aspect-square flex justify-center items-center bg-primary mx-6 rounded-3xl ring-2 ring-secondary ring-offset-4 ring-offset-secondary hover:ring-tertiary duration-150`}>
                <div className="flex flex-col justify-center items-center">
                    <Image 
                        src={imgSrc}
                        width={175}
                        height={175}
                        quality={100}
                        priority={true}
                        unoptimized
                        alt=""
                        className="unselectable"
                    />
                    <div className="flex flex-col justify-center items-center mt-6">
                        <h5 className="font-bold text-2xl tracking-tight text-secondary">{ title }</h5>
                        <p className="mx-8 text-center my-2 font-light text-[0.95rem]">{ subtext }</p>
                    </div>
                </div>
            </div>
        </Tilt>
    )
}

export default Card;