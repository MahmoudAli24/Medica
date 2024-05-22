import dynamic from "next/dynamic";
import CoursesContent from "@/modules/courses/CoursesContent";

const CoursesFilter = dynamic(() => (import("@/modules/courses/CoursesFilter")))

const CoursesData = ({searchParams}) => {
    return (<section className={"container relative"}>
        <CoursesFilter/>
        <CoursesContent searchParams={searchParams}/>
    </section>)
}

export default CoursesData;