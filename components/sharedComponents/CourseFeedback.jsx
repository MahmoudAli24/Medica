import HeadingSection from "@/components/headingSection/HeadingSection";
import {Card, CardContent} from "@/components/ui/card";
import Rating from "@/components/sharedComponents/Rating";
import FeedbackRateBar from "@/modules/course/components/FeedbackRateBar";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area"
import FeedbackReviewItem from "@/modules/course/components/FeedbackReviewItem";


const CourseFeedback =({feedbackData ,feedbackDataR ,dict})=>{

    return(
        <section className={"container py-6"} dir={"ltr"}>
            <HeadingSection>{dict.studentFeedback}</HeadingSection>
            <Card className={"mx-auto pt-6 lg:w-3/5"}>
                <CardContent className={"p-3"}>
                    <div>
                        <div className={"grid grid-cols-1 items-center gap-2 md:grid-cols-4"}>
                            <h2 className={"text-[40px] flex items-center flex-col bg-[#F5FCFF] justify-center sm:h-full"}>
                                <span className={"text-[--main-color] font-bold"}>4.8<span className={"text-muted-foreground "}>/5</span></span>
                                <Rating value={4.5}/>
                                <p className={"text-[--main-color] text-[14px] font-medium"}>1996 ratings</p>
                            </h2>
                            <div className={"space-y-3 sm:col-span-3"}>
                                {feedbackData.map((item, index) => (
                                    <div key={index} className="col-span-1 space-y-3">
                                        <FeedbackRateBar value={item.value} count={item.count} stars={item.stars} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={"mt-2 p-2 bg-gray-50"}>
                            <ScrollArea className="h-[400px] w-full">
                                {feedbackDataR.map((item, index) => (
                                    <FeedbackReviewItem key={index} image={item.image} userName={item.userName} rate={item.rate} date={item.date} content={item.content} />
                                ))}
                                <ScrollBar className={"hidden"}/>
                            </ScrollArea>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

export default CourseFeedback;