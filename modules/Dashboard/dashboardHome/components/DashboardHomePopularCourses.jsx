import Link from "next/link";
import {Card, CardContent, CardTitle} from "@/components/ui/card";
import CourseCard from "@/components/sharedComponents/CoursesCard";
import doctor from "@/public/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded.png";

const DashboardHomePopularCourses = () => {
    const coursesData = [
        {
            id: 1,
            title: "Course Title 1",
            lecturesCount: 12,
            time: "12 Hr",
            isCertificate: true,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Id aliquet lectus proin nibh nisl.",
            docName: "Mahmoud",
            docTitle: "Professor of Medicine",
            courseRate: 3,
            image: doctor,
            price: 700,
            lastUpdate: "Last updated: 2023-04-05 15:39:18"
        },
        {
            id: 2,
            title: "Course Title 2",
            lecturesCount: 8,
            time: "8 Hr",
            isCertificate: false,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Id aliquet lectus proin nibh nisl.",
            docName: "Ahmed",
            docTitle: "Professor of Engineering",
            courseRate: 4,
            image: doctor,
            price: 800,
            lastUpdate: "Last updated: 2023-04-05 15:39:18"
        },
    ]
    return (
        <section className={"py-8"}>
            <Card>
                <CardTitle
                    className={"p-4 ps-5 font-medium flex items-center justify-between"}><span>Popular Courses</span>
                    <Link href={"/courses"} className={"text-[14px] text-[--main-color] hover:underline"}> Show More &gt;&gt; </Link></CardTitle>
                <CardContent className={"space-y-4"}>
                    {coursesData.map((course, index) => (
                        <CourseCard item={course} key={index}/>
                    ))}
                </CardContent>
            </Card>
        </section>
    )
}

export default DashboardHomePopularCourses