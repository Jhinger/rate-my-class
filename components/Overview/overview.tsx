import Carousel from "@/components/Carousel";
import Request from "@/components/Button/Request";
import schoolsImagesArr from "@/static/schools";
import { NUM_RATINGS_PLACEHOLDER, NUM_SCHOOLS_PLACEHOLDER } from "@/constants";

const Overview = () => {
	return (
		<div className="flex h-[35rem] w-full flex-col items-center justify-center bg-secondary">
			<Carousel schools={schoolsImagesArr} />
			<div className="my-8 flex flex-wrap items-center justify-center gap-3 text-5xl tracking-tight text-white">
				{NUM_SCHOOLS_PLACEHOLDER}
				<span className="font-black">SCHOOLS</span>
				<span className="hidden sm:inline">|</span>
				{NUM_RATINGS_PLACEHOLDER}
				<span className="font-black">RATINGS</span>
			</div>
			<div className="relative flex h-[4rem] w-full justify-center">
				<Request />
			</div>
		</div>
	);
};

export default Overview;
