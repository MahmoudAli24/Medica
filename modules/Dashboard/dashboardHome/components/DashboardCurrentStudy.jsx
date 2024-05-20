import {TypographyH3} from "@/components/typography/TypographyH3";
import Image from "next/image";
import VIDEO from "@/public/icons/video.svg"
import {TypographyMuted} from "@/components/typography/TypographyMuted";

const DashboardCurrentStudy = () => {
    return (
        <section className={"py-4"}>
            <TypographyH3 className={"mb-3"}>Current Study</TypographyH3>
            <div>
                <Image src={VIDEO} alt={"dsd"} className={"object-cover w-full h-full"}/>
            </div>
            <TypographyH3 className={"md:w-3/5 font-[400]"}>Advanced Training Program on Decontamination of Medical Equipment</TypographyH3>
            <TypographyMuted>Introducing you to the field of data science and building your understanding of the key
                data science terms and processes.</TypographyMuted>
        </section>
    )
}

export default DashboardCurrentStudy