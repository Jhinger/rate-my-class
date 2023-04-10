import { Card } from "@/types"
import { boosters, ratings, data } from "@/static/cards";

const cards: Card[] = [
    {
        imgSrc: ratings,
        title: "Ratings",
        subtext: "Get a better understanding of your schedule before signing up for classes."
    },
    {
        imgSrc: boosters,
        title: "GPA Boosters",
        subtext: "Find an easy class to round out your schedule that will deliver a good grade."
    },
    {
        imgSrc: data,
        title: "Historical Data",
        subtext: "View grade data in order to better understand the grade distribution for your classes."
    }
];

export {
    cards
}