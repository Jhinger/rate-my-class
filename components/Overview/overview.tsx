import Carousel from "@/components/Carousel"
import schoolsImagesArr from "@/static/schools";

const Overview =() => {
    return (
        <div className="w-full h-[40rem] bg-secondary border-2 border-solid border-green-500">
            <Carousel schools={schoolsImagesArr} />
        </div>
    )
}

export default Overview;