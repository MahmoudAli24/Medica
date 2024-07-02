import { Card, CardContent, CardTitle } from "@/components/ui/card";
import VideoCard from "@/components/sharedComponents/VideoCard";
import image from "@/public/Curriculum.png";

const DashboardHomeLatestStudy = ({ dict } ) => {

    return (
        <section className={"py-7"}>
            <Card>
                <CardTitle className={"p-4 ps-5 font-medium"}>{dict.dashboardHomeLatestStudy.title}</CardTitle>
                <CardContent className={"grid grid-cols-1 gap-2 lg:gap-4 lg:grid-cols-2"}>
                    {[...Array(4)].map((_, index) => (
                        <VideoCard key={index} image={image} title={dict.dashboardHomeLatestStudy.videoTitle} isComplete={true} />
                    ))}
                </CardContent>
            </Card>
        </section>
    );
};

export default DashboardHomeLatestStudy;
