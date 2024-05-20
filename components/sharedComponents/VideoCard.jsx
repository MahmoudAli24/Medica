import Image from "next/image";
import {TypographyMuted} from "@/components/typography/TypographyMuted";
import {cn} from "@/lib/utils";
import completeIcon from "@/public/icons/completeIcon.svg"
const VideoCard=({image , title ,className , isComplete})=>{
    return(
        <div
            className={cn("h-[300px] relative rounded overflow-hidden",className)}>
            <Image src={image} alt={title} className={"object-cover w-full h-full"} priority={true}/>
            <div className={"bg-gradient-to-t from-[#12193E] to-[#12193E]/0 absolute top-0 start-0 w-full h-full"}/>
            <TypographyMuted className={"absolute bottom-0 start-0 text-white p-4 text-base font-semibold"}>{title}</TypographyMuted>
            {
                isComplete && <span className={"absolute top-6 end-7"}>
                <Image src={completeIcon} alt={"complete Icon"}/>
                </span>
            }
        </div>
    )
}

export default VideoCard;