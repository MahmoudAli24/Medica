"use client"
import ReactStars from "react-stars";

const Rating = ({value , count = 5})=>{
    return <ReactStars edit={false} value={value} count={count}/>
}

export default Rating