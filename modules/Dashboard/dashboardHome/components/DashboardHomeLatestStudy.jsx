import {Card, CardContent, CardTitle} from "@/components/ui/card";
import VideoCard from "@/components/sharedComponents/VideoCard";
import image from "@/public/Curriculum.png"

const DashboardHomeLatestStudy = () => {
    return(
        <section className={"py-7"}>
           <Card>
               <CardTitle className={"p-4 ps-5 font-medium"}>Latest Study</CardTitle>
               <CardContent className={"grid grid-cols-1 gap-2 lg:gap-4 lg:grid-cols-2"}>
                   <VideoCard image={image} title={"Lorem Ipsum dolor sit amet sfd dolwes wsd"} isComplete={true}/>
                   <VideoCard image={image} title={"Lorem Ipsum dolor sit amet sfd dolwes wsd"} isComplete={true}/>
                   <VideoCard image={image} title={"Lorem Ipsum dolor sit amet sfd dolwes wsd"} isComplete={true}/>
                   <VideoCard image={image} title={"Lorem Ipsum dolor sit amet sfd dolwes wsd"} isComplete={true}/>
               </CardContent>
           </Card>
        </section>
    )
}

export default DashboardHomeLatestStudy;