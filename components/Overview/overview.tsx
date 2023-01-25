import Carousel from "@/components/Carousel"
import Request from "@/components/Button/Request";
import schoolsImagesArr from "@/static/schools";
import { NUM_RATINGS_PLACEHOLDER, NUM_SCHOOLS_PLACEHOLDER } from "@/constants";

const Overview = () => {
    return (
        <div className="w-full h-[35rem] bg-secondary flex flex-col items-center justify-center">
            <Carousel schools={schoolsImagesArr} />
            <div className="text-white text-5xl my-8 tracking-tight">
                { NUM_SCHOOLS_PLACEHOLDER } <span className="font-black">SCHOOLS</span> | { NUM_RATINGS_PLACEHOLDER } <span className="font-black">RATINGS</span>
            </div>
            <div className="flex justify-center w-full h-[4rem] relative">
                <Request />
            </div>
        </div>
    )
}

export default Overview;