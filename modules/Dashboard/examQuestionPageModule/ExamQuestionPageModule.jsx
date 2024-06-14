import NavbarDashboard from "@/components/navbarDashboard/NavbarDashboard";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {IoCalendarOutline} from "react-icons/io5";
import {LuClock3} from "react-icons/lu";
import {AiOutlinePercentage} from "react-icons/ai";
import OverviewItem from "@/modules/Dashboard/examQuestionPageModule/components/OverviewItem";
import {TypographyH3} from "@/components/typography/TypographyH3";
import {TypographyMuted} from "@/components/typography/TypographyMuted";
import {TypographyH2} from "@/components/typography/typographyH2/TypographyH2";
import QuestionsForm from "@/modules/Dashboard/examQuestionPageModule/components/QuestionsForm";
import {Toaster} from "@/components/ui/toaster";

const ExamQuestionPageModule = ({examQuestion}) => {
    return (
        <section className="col-span-12 md:col-span-11 mt-14 w-full">
            <NavbarDashboard>
                <TypographyH3 className="font-bold">Course Exam</TypographyH3>
                <TypographyMuted>Standard dummy text ever since the 1500s.</TypographyMuted>
            </NavbarDashboard>
            <ScrollArea className="h-[calc(100dvh-122px)] pt-3 border-t-2">
                <Card>
                    <CardHeader>
                        {examQuestion ? (
                            <>
                                <TypographyH2 className={"text-[--main-color]"}>{examQuestion.title}</TypographyH2>
                                <div>
                                    <p className="mb-3">Overview</p>
                                    <div className="flex items-center gap-6 flex-wrap">
                                        <OverviewItem
                                            icon={<IoCalendarOutline size={26}/>}
                                            label="Deadline"
                                            value={examQuestion.overview.deadline}
                                        />
                                        <OverviewItem
                                            icon={<LuClock3 size={26}/>}
                                            label="Time"
                                            value={examQuestion.overview.time}
                                        />
                                        <OverviewItem
                                            icon={<AiOutlinePercentage size={26}/>}
                                            label="Task percentage"
                                            value={examQuestion.overview.taskPercentage}
                                        />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <TypographyH2>Exam Not Found</TypographyH2>
                                <TypographyMuted>The requested exam could not be found.</TypographyMuted>
                            </>
                        )}
                    </CardHeader>
                    {examQuestion && (
                        <CardContent>
                            <QuestionsForm examQuestion={examQuestion}/>
                        </CardContent>
                    )}
                </Card>
                <Toaster />
            </ScrollArea>
        </section>
    );
};

export default ExamQuestionPageModule;
