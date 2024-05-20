import Image from "next/image";
import BreadcrumbHead from "@/components/BreadcrumbHead/BreadcrumbHead";
import {TypographyH1} from "@/components/typography/TypographyH1";
import Rating from "@/components/sharedComponents/Rating";
import {TypographyLead} from "@/components/typography/TypographyLead";
import iconWeek from "@/public/duration.svg";
import videoLesson from "@/public/video-lesson.svg"
import {Button} from "@/components/ui/button";
import {TypographyMuted} from "@/components/typography/TypographyMuted";
import doc from "@/public/successful-old-businessman-suit-glasses-looking-confident.png"

const CourseHead = () => {
    return (<header className={"head-bg md:h-[calc(100dvh-91px)]"}>
        <div className={"container h-full"}>
            <div className={"flex pt-[136px] items-center h-full flex-col md:flex-row"}>
                <div className={"capitalize h-fit flex flex-col gap-4"}>
                    <BreadcrumbHead/>
                    <span className={"flex gap-2 items-center text-white"}>
                        <span className={"bg-white/10 py-1 px-2 rounded"}>Foundational</span>
                        <span className={"flex items-center gap-1"}>4.5/5 <Rating value={4.5}/></span>
                        <span>(1966)</span>
                    </span>
                    <TypographyH1 className={"text-white font-bold mb-4 leading-none"}>Medical Coding and
                        Transcription</TypographyH1>
                    <div className={'flex flex-col gap-4'}>
                        <TypographyLead className={"text-white mb-2"}><span
                            className={"text-[--secondary-color]"}>With</span> DR.Nabil Makram</TypographyLead>
                        <p className={"bg-white/10 text-[--secondary-color] py-1 px-2 rounded text-[16px] w-fit"}>Co-Founder
                            &
                            Chief Technology Officer</p>
                        <TypographyLead className={"text-white"}>this course provides an overview of medical coding,
                            focusing on the HCPCS, CPT,
                            and ICD coding systems. Students will learn the basics of coding and gain an
                            understanding
                            of the different code.</TypographyLead>
                        <span className={"flex items-center text-white gap-4"}>
                            <span className={"flex items-center gap-2"}>
                                <Image src={iconWeek} alt={"duration"}/>
                                    7 Weeks
                            </span>
                            <span className={"flex items-center gap-2"}>
                                <Image src={videoLesson} alt={"duration"}/>
                                    81 lessons
                            </span>
                        </span>
                        <span className={"flex items-center gap-3"}>
                            <Button
                                className={"bg-transparent py-2 px-3 text-lg border-2 border-[--secondary-color] w-fit hover:bg-transparent"}>Start Course</Button>
                            <TypographyMuted
                                className={"text-white"}>Get 7 Free Days For First Sign Up</TypographyMuted>
                        </span>
                    </div>
                </div>
                <div className={"flex flex-col justify-end items-center h-fit"}>
                    <Image src={doc} alt={"doc"} className={"block object-cover h-min"}/>
                </div>
            </div>
        </div>
    </header>)
}

export default CourseHead