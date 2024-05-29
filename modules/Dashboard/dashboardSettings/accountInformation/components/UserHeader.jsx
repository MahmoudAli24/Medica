import Image from "next/image";
import user from "@/public/icons/user.svg"
import {TypographyLead} from "@/components/typography/TypographyLead";
import {TypographyMuted} from "@/components/typography/TypographyMuted";
import ArrowLevelIcon from "@/components/icons/ArrowLevelIcon";
import XBIcon from "@/components/icons/XBIcon";
import ResumeIcon from "@/components/icons/ResumeIcon";
import ButtonBorder from "@/modules/Dashboard/dashboardSettings/components/ButtonBorder";
const UserHeader = ()=>{
    return(
        <>
            <div className={"p-3 rounded-lg mt-5 border flex justify-between items-center flex-wrap gap-y-3"}>
                <div className={"flex gap-10 items-center"}>
                    <span className={"rounded-full overflow-hidden"}><Image src={user} alt={"User"} width="150" height="150"/></span>
                    <div>
                        <TypographyLead className={"text-[--main-color] font-semibold"}>Karim
                            Farid</TypographyLead>
                        <TypographyMuted>Student</TypographyMuted>
                        <TypographyMuted>Giza,Egypt</TypographyMuted>
                    </div>
                </div>
                <div className={"flex items-center flex-wrap gap-4 h-full"}>
                    <div
                        className={"px-12 h-full py-5 rounded border border-[#DEDEDE]/40 flex flex-col gap-3 items-center justify-center bg-[#31C7FE]/5"}>
                        <p>Level</p>
                        <span><ArrowLevelIcon/></span>
                        <TypographyLead className={"text-[--main-color] font-bold"}>10</TypographyLead>
                    </div>
                    <div
                        className={"px-12 h-full py-5 rounded border border-[#DEDEDE]/40 flex flex-col gap-3 items-center justify-center bg-[#31C7FE]/5"}>
                        <p>XB</p>
                        <span className={"flex flex-col justify-center h-[41.99px]"}><XBIcon/></span>
                        <TypographyLead className={"text-[--main-color] font-bold"}>54</TypographyLead>
                    </div>
                    <div
                        className={"px-10 py-5 rounded border border-[#DEDEDE]/40 flex flex-col gap-3 items-center justify-center bg-[#31C7FE]/5"}>
                        <span><ResumeIcon/></span>
                        <ButtonBorder>Build a Resume</ButtonBorder>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserHeader