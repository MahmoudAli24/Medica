import {TypographyH3} from "@/components/typography/TypographyH3";
import {TypographyMuted} from "@/components/typography/TypographyMuted";
import VideoPlayer from "@/components/sharedComponents/videoPlayer/VideoPlayer";

const DashboardCurrentStudy = () => {
    return (
        <section className={"py-4"}>
            <TypographyH3 className={"mb-3"}>Current Study</TypographyH3>
            <div>
                <VideoPlayer videoSrc={"https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4\n"}/>
            </div>
            <TypographyH3 className={"md:w-3/5 font-[400]"}>Advanced Training Program on Decontamination of Medical Equipment</TypographyH3>
            <TypographyMuted>Introducing you to the field of data science and building your understanding of the key
                data science terms and processes.</TypographyMuted>
        </section>
    )
}

export default DashboardCurrentStudy