import dynamic from "next/dynamic";
import CoursesContent from "@/modules/courses/CoursesContent";

const CoursesFilter = dynamic(() => (import("@/modules/courses/CoursesFilter")))

const CoursesData = ({searchParams , dict}) => {
    return (<section className={"container relative"}>
        <CoursesFilter dict={dict}/>
        <CoursesContent dict={dict} searchParams={searchParams}/>
    </section>)
}

export default CoursesData;