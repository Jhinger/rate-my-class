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
            <div className={`w-[25rem] bg-gradient-to-br from-tertiary to-tertiaryComplement aspect-square flex justify-center items-center mx-6 rounded-3xl animate-gradient`}>
                <div className={`${className} aspect-square rounded-3xl m-2 flex flex-col justify-center items-center`}>
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
                        <p className="mx-8 text-center my-2 font-light text-[0.9rem]">{ subtext }</p>
                    </div>
                </div>
            </div>
        </Tilt>
    )
}

export default Card;