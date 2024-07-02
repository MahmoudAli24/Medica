import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import CourseCard from "@/components/sharedComponents/CoursesCard";
import doctor from "@/public/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded.png";
const DashboardHomePopularCourses = ({dict}) => {

    const coursesData = [
        {
            id: 1,
            title: dict.dashboardHomePopularCourses.courseTitle1,
            lecturesCount: 12,
            time: "12 Hr",
            isCertificate: true,
            description: dict.dashboardHomePopularCourses.courseDescription1,
            docName: "Mahmoud",
            docTitle: dict.dashboardHomePopularCourses.docTitle1,
            courseRate: 3,
            image: doctor,
            price: 700,
            lastUpdate: "2023-04-05 15:39:18"
        },
        {
            id: 2,
            title: dict.dashboardHomePopularCourses.courseTitle2,
            lecturesCount: 8,
            time: "8 Hr",
            isCertificate: false,
            description: dict.dashboardHomePopularCourses.courseDescription2,
            docName: "Ahmed",
            docTitle: dict.dashboardHomePopularCourses.docTitle2,
            courseRate: 4,
            image: doctor,
            price: 800,
            lastUpdate: "2023-04-05 15:39:18"
        },
    ];

    return (
        <section className={"py-8"}>
            <Card>
                <CardTitle className={"p-4 ps-5 font-medium flex items-center justify-between"}>
                    <span>{dict.dashboardHomePopularCourses.title}</span>
                    <Link href={`/${dict.lang}/courses`} className={"text-[14px] text-[--main-color] hover:underline"}>
                        {dict.dashboardHomePopularCourses.showMore} &gt;&gt;
                    </Link>
                </CardTitle>
                <CardContent className={"space-y-4"}>
                    {coursesData.map((course, index) => (
                        <CourseCard item={course} key={index} />
                    ))}
                </CardContent>
            </Card>
        </section>
    );
};

export default DashboardHomePopularCourses;
