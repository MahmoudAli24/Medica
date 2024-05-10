import {TypographyH2} from "@/components/typography/typographyH2/TypographyH2";
import {TypographyMuted} from "@/components/typography/TypographyMuted";
import Link from "next/link";
import {BsArrowRightCircle} from "react-icons/bs";

const FindContent =()=>{
    return (
        <div className=" md:col-span-3">
            <TypographyH2 className={"text-[--main-color]"}>
                <span className="text-[--secondary-color]">Fined</span> The Best <br/> Career Track
                for <span className="text-[--secondary-light]">You</span>
            </TypographyH2>
            <TypographyMuted className={"mb-2"}>Start learning today, master the top tools required by
                employers, and secure a
                role in data science.</TypographyMuted>
            <TypographyMuted>Start learning today, master the top tools required by employers, and secure a
                role in data science.</TypographyMuted>
            <Link href={"/"}
                  className={"inline-flex items-center justify-center gap-2 py-2 px-3 rounded text-lg text-white font-bold mt-4 bg-gradient-to-r from-[--secondary-light] to-[--secondary-color]"}>Start
                Your Career <span className={"text-[--secondary-light]"}><BsArrowRightCircle
                    size={18}/></span></Link>
        </div>
    )
}

export default FindContent