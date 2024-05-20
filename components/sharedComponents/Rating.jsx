"use client"
import ReactStars from "react-rating-stars-component";

const Rating = ({ value, count}) => {
    return <ReactStars edit={false} value={value} count={count} isHalf={true} />;
}

export default Rating;
