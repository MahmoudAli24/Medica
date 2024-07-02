"use client";
import { useState } from "react";
import HeadingSection from "@/components/headingSection/HeadingSection";
import { Card, CardContent } from "@/components/ui/card";
import { TypographyLead } from "@/components/typography/TypographyLead";
import { Separator } from "@/components/ui/separator";
import { TypographyMuted } from "@/components/typography/TypographyMuted";
import CourseVideosCardItem from "@/modules/course/components/CourseVideosCardItem";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const CourseVideos = ({ dict }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded((prev) => !prev);

    return (
        <section className="container py-6">
            <HeadingSection>{dict.courseVideos.title}</HeadingSection>
            <Card className="mx-auto pt-6 lg:w-3/5">
                <CardContent className="px-1 sm:px-6 lg:px-8">
                    <TypographyLead className="flex justify-between items-center font-bold text-[--main-color]">
                        <span>{dict.courseVideos.lectures}</span>
                        <span>{dict.courseVideos.numberOfLectures} lectures</span>
                        <span>{dict.courseVideos.totalDuration}</span>
                    </TypographyLead>
                    <Separator className="mt-3" />
                    <TypographyMuted className="text-red-500">
                        {dict.courseVideos.lockedLecturesNotice}
                    </TypographyMuted>
                    <div className="mt-3 space-y-4">
                        <CourseVideosCardItem
                            dict={dict}
                            videoNumber="1"
                            videoTitle={dict.courseVideos.videoTitle1}
                            watchStatus={dict.courseVideos.watchFree}
                            duration="12:55"
                        />
                        <CourseVideosCardItem
                            dict={dict}
                            videoNumber="2"
                            videoTitle={dict.courseVideos.videoTitle2}
                            watchStatus={dict.courseVideos.watchFree}
                            duration="15:30"
                        />
                        <CourseVideosCardItem
                            dict={dict}
                            videoNumber="3"
                            videoTitle={dict.courseVideos.videoTitle3}
                            watchStatus={dict.courseVideos.watchFree}
                            duration="10:20"
                        />
                        <Collapsible>
                            <CollapsibleContent
                                className={`space-y-4 transition-opacity data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up ${
                                    isExpanded ? "opacity-100" : "opacity-0"
                                }`}
                            >
                                <CourseVideosCardItem
                                    dict={dict}
                                    videoNumber="4"
                                    videoTitle={dict.courseVideos.videoTitle4}
                                    watchStatus={dict.courseVideos.watchFree}
                                    duration="14:10"
                                />
                                <CourseVideosCardItem
                                    dict={dict}
                                    videoNumber="5"
                                    videoTitle={dict.courseVideos.videoTitle5}
                                    watchStatus={dict.courseVideos.watchFree}
                                    duration="11:45"
                                />
                                <CourseVideosCardItem
                                    dict={dict}
                                    videoNumber="6"
                                    videoTitle={dict.courseVideos.videoTitle6}
                                    watchStatus={dict.courseVideos.watchFree}
                                    duration="13:30"
                                />
                            </CollapsibleContent>
                            <CollapsibleTrigger className="text-center text-[--main-color] w-full" onClick={toggleExpand}>
                                {isExpanded ? dict.courseVideos.showLess : dict.courseVideos.showMore}
                            </CollapsibleTrigger>
                        </Collapsible>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};

export default CourseVideos;
