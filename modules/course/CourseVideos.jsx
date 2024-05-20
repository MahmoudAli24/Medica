"use client"
import {useState} from "react";
import HeadingSection from "@/components/headingSection/HeadingSection";
import {Card, CardContent} from "@/components/ui/card";
import {TypographyLead} from "@/components/typography/TypographyLead";
import {Separator} from "@/components/ui/separator";
import {TypographyMuted} from "@/components/typography/TypographyMuted";
import CourseVideosCardItem from "@/modules/course/components/CourseVideosCardItem";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";

const CourseVideos = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };
    return (<section className="container py-6">
        <HeadingSection>Medical Coding and Transcription Curriculum</HeadingSection>
        <Card className={"mx-auto pt-6 lg:w-3/5"}>
            <CardContent className={"px-1 sm:px-6 lg:px-8 "}>
                <TypographyLead className={"flex justify-between items-center font-bold text-[--main-color]"}>
                    <span>Lectures</span>
                    <span>6   lectures</span>
                    <span>01:08:52</span>
                </TypographyLead>
                <Separator className={"mt-3"}/>
                <TypographyMuted className={"text-red-500"}>Some lectures will remain locked until you watch the
                    previous ones.</TypographyMuted>
                <div className={"mt-3 space-y-4"}>
                    <CourseVideosCardItem/>
                    <CourseVideosCardItem/>
                    <CourseVideosCardItem/>
                    <Collapsible>
                        <CollapsibleContent className={`space-y-4 transition-opacity data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up ${isExpanded ? "opacity-100" : "opacity-0"}`}>
                            <CourseVideosCardItem/>
                            <CourseVideosCardItem/>
                            <CourseVideosCardItem/>
                            <CourseVideosCardItem/>
                            <CourseVideosCardItem/>
                            <CourseVideosCardItem/>
                        </CollapsibleContent>
                        <CollapsibleTrigger className={"text-center text-[--main-color] w-full"} onClick={toggleExpand}>
                            {isExpanded ? "Show Less" : "Show More"}
                        </CollapsibleTrigger>
                    </Collapsible>
                </div>
            </CardContent>
        </Card>
    </section>)
}

export default CourseVideos;