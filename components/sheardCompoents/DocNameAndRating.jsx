import Rating from "@/components/sheardCompoents/Rating";
import {cn} from "@/lib/utils";

const DocNameAndRating = ({rate,name,docTitle ,className,pClassName})=>{
    return (
        <div>
            <Rating value={rate}/>
            <h2 className={cn("text-white text-lg sm:text-xl font-bold",className)}>{name}</h2>
            <p className={cn("text-white/70 text-[14px] sm:text-[18px]",pClassName)}>{docTitle}</p>
        </div>
    )
}

export default DocNameAndRating;