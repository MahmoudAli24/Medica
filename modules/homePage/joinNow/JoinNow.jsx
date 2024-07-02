import Link from 'next/link';
import { TypographyH2 } from "@/components/typography/typographyH2/TypographyH2";
import classes from "./JoinNow.module.css";
import { TypographyMuted } from "@/components/typography/TypographyMuted";

const JoinNow = ({ dict }) => {
    return (
        <section className={`mt-8 ${classes.image} relative h-[80dvh]`}>
            <div className={`${classes.join} h-full`}>
                <div className={"container h-full flex flex-col justify-center"}>
                    <TypographyH2 className={"text-white z-10"}>
                        {dict.whyStudentsLove} <br/>
                        <span className="text-[--secondary-color]">{dict.medica}</span>
                    </TypographyH2>
                    <TypographyMuted className={"text-white md:w-1/2"}>
                        {dict.longEstablishedFact}
                    </TypographyMuted>
                    <Link href={"/"} className={"text-white text-xl font-bold mt-4 border-2 border-[--secondary-color] w-fit py-3 px-2 rounded"}>
                        {dict.joinUsNow}
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default JoinNow;
