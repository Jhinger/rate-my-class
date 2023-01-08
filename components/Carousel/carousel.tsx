import Image from "next/image"

interface ICarouselProps {
    schools: any[];
    children?: React.ReactNode;
}

const Carousel = ({ schools }: ICarouselProps) => {
    schools = [...schools, ...schools];

    const renderImages = schools.map((school, i) => (
        <div key={i} className="slide flex justify-center align-center">
            <Image src={school} width={50} height={75} alt={''} quality={100} priority={true} className="unselectable"/>
        </div>
    ))

    return (
        <div className="slider">
            <div className="slide-track">
                { renderImages }
            </div>
        </div>
    )
}

export default Carousel;