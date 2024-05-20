import HeadingSection from "@/components/headingSection/HeadingSection";
import {Card, CardContent} from "@/components/ui/card";
import {TypographyLead} from "@/components/typography/TypographyLead";
import {TypographyMuted} from "@/components/typography/TypographyMuted";
import videoIcon from "@/public/icons/video-player.svg"
import clockIcon from "@/public/icons/wait.svg"
import test from "@/public/icons/test.svg"
import verified from "@/public/icons/verified.svg"
import Image from "next/image";

const CourseOverview = () => {
    return (<section className={"pt-5 pb-20 container"}>
        <HeadingSection>Course Overview</HeadingSection>
        <div className={"relative mt-6 lg:w-3/5 mx-auto"}>
            <Card>
                <CardContent className={"shadow-card p-4 sm:pb-24 mb-2"}>
                    <TypographyLead className={"text-center"}>this course provides an overview of medical coding,
                        focusing on the HCPCS, CPT, and
                        ICD coding systems. Students will learn the basics of coding and gain an understanding of the
                        different code sets and how they are used in medical billing and reimbursement. The course will
                        cover coding guidelines, conventions, and modifiers, as well as common coding scenarios and
                        challenges.
                    </TypographyLead>
                </CardContent>
            </Card>
            <div className={"sm:absolute bottom-0 end-1/2 sm:translate-y-1/2 sm:translate-x-1/2 w-full grid grid-cols-2 sm:flex sm:items-center sm:justify-between gap-2"}>
                <Card className={"drop-shadow-lg rounded w-2/3 mx-auto"}>
                    <CardContent className={"shadow-card pb-2"}>
                        <TypographyMuted className={"text-center"}>
                            <Image src={videoIcon} alt={"video Icon"} className={"w-1/2 mx-auto"} />
                            81 High <br/> Quality Lessons
                        </TypographyMuted>
                    </CardContent>
                </Card>
                <Card className={"drop-shadow-lg rounded w-2/3 mx-auto"}>
                <CardContent className={"shadow-card pb-2"}>
                    <TypographyMuted className={"text-center"}>
                        <Image src={clockIcon} alt={"video Icon"} className={"w-1/2 mx-auto"} />
                        81 High <br/> Quality Lessons
                    </TypographyMuted>
                </CardContent>
            </Card>
                <Card className={"drop-shadow-lg rounded w-2/3 mx-auto "}>
                <CardContent className={"shadow-card pb-2"}>
                    <TypographyMuted className={"text-center"}>
                        <Image src={test} alt={"video Icon"} className={"w-1/2 mx-auto"} />
                        81 High <br/> Quality Lessons
                    </TypographyMuted>
                </CardContent>
            </Card>
                <Card className={"drop-shadow-lg rounded w-2/3 mx-auto "}>
                <CardContent className={"shadow-card pb-2"}>
                    <TypographyMuted className={"text-center"}>
                        <Image src={verified} alt={"video Icon"} className={"w-1/2 mx-auto"} />
                        81 High <br/> Quality Lessons
                    </TypographyMuted>
                </CardContent>
            </Card>
            </div>
        </div>

    </section>)
}

export default CourseOverview