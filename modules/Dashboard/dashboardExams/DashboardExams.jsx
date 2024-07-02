import { TypographyH3 } from "@/components/typography/TypographyH3";
import { TypographyMuted } from "@/components/typography/TypographyMuted";
import NavbarDashboard from "@/components/navbarDashboard/NavbarDashboard";
import { ScrollArea } from "@/components/ui/scroll-area";
import ExamSection from "@/modules/Dashboard/dashboardExams/components/ExamSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {fetchCoursesExams} from "@/app/[lang]/actions/coursesExamsAction";

const tabClasses = "border-transparent data-[state=active]:font-bold data-[state=active]:text-[--secondary-color] data-[state=active]:border-b-2 data-[state=active]:border-[--secondary-color]";

const DashboardExams = async () => {
    const examsData = await fetchCoursesExams()
    return (
        <section className="col-span-12 md:col-span-11 mt-14 w-full">
            <NavbarDashboard>
                <TypographyH3 className="font-bold">Exams</TypographyH3>
                <TypographyMuted>Standard dummy text ever since the 1500s.</TypographyMuted>
            </NavbarDashboard>
            <ScrollArea className="h-[calc(100dvh-122px)] pt-3 border-t-2">
                <Tabs defaultValue="courses-exams">
                    <TabsList>
                        <TabsTrigger value="courses-exams" className={tabClasses}>
                            Courses Exams
                        </TabsTrigger>
                        <TabsTrigger value="tracks-exams" className={tabClasses}>
                            Tracks Exams
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="courses-exams" className={"space-y-6"}>
                        {examsData.map((exam, index) => (
                            <ExamSection key={index} item={exam}/>
                        ))}
                    </TabsContent>
                    <TabsContent value="tracks-exams">
                        Change your password here.
                    </TabsContent>
                </Tabs>
            </ScrollArea>
        </section>
    )
}

export default DashboardExams;
