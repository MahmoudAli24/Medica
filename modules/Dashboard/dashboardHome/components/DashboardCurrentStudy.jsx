"use client"
import { TypographyH3 } from "@/components/typography/TypographyH3";
import { TypographyMuted } from "@/components/typography/TypographyMuted";
import dynamic from "next/dynamic";
import {useEffect, useState} from "react";
const VideoPlayer = dynamic(()=>import("@/components/sharedComponents/videoPlayer/VideoPlayer"));

const DashboardCurrentStudy = ({dict}) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        isClient && <section className={"py-4"}>
            <TypographyH3 className={"mb-3"}>{dict.dashboardCurrentStudy.title}</TypographyH3>
            <div>
                <VideoPlayer videoSrc={"https://www.youtube.com/watch?v=oUFJJNQGwhk"}/>
            </div>
            <TypographyH3 className={"md:w-3/5 font-[400]"}>{dict.dashboardCurrentStudy.programTitle}</TypographyH3>
            <TypographyMuted>{dict.dashboardCurrentStudy.programDescription}</TypographyMuted>
        </section>
    );
};

export default DashboardCurrentStudy;
