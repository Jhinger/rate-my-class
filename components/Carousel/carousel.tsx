import Image from "next/image";

interface ICarouselProps {
	schools: any[];
	children?: React.ReactNode;
}

const Carousel = ({ schools }: ICarouselProps) => {
	schools = [...schools, ...schools];

	const renderImages = schools.map((school, i) => (
		<div key={i} className="slide align-center flex justify-center">
			<Image
				src={school}
				style={{ height: "auto", width: "60%" }}
				alt={""}
				quality={100}
				className="unselectable"
				loading="lazy"
			/>
		</div>
	));

	return (
		<div className="slider">
			<div className="slide-track">{renderImages}</div>
		</div>
	);
};

export default Carousel;
