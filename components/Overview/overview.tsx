import Carousel from "@/components/Carousel"
import Request from "../Button/Request";
import schoolsImagesArr from "@/static/schools";

const NUM_SCHOOLS_PLACEHOLDER = 240;
const NUM_RATINGS_PLACEHOLDER = 34890;

const Overview = () => {
    return (
        <div className="w-full h-[35rem] bg-secondary flex flex-col items-center justify-center">
            <Carousel schools={schoolsImagesArr} />
            <div className="text-white text-5xl my-8 tracking-tight">
                { NUM_SCHOOLS_PLACEHOLDER } <span className="font-black">SCHOOLS</span> | { NUM_RATINGS_PLACEHOLDER } <span className="font-black">RATINGS</span>
            </div>
            <Request />
        </div>
    )
}

export default Overview;