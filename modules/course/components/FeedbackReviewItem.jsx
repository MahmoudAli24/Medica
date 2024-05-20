import Image from "next/image";
import {TypographyMuted} from "@/components/typography/TypographyMuted";
import Rating from "@/components/sharedComponents/Rating";

const FeedbackReviewItem = ({image ,userName ,rate , date , content}) => {
    return (<div className={"flex items-center gap-2 mt-2"}>
        <div className={"w-[80px]"}>
            <Image src={image} width={76} height={76} alt={"feedback "} className={"object-cover"}/>
        </div>
        <div className={"flex-1"}>
            <div className={"flex justify-between items-center"}>
                <span className={"flex items-center gap-2 flex-wrap"}>{userName} <Rating value={rate}/></span>
                <span>{date}</span>
            </div>
            <TypographyMuted>
                {content}
            </TypographyMuted>
        </div>
    </div>)
}

export default FeedbackReviewItem