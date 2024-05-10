import CoursesContent from "@/modules/courses/CoursesContent";
import CoursesFilter from "@/modules/courses/CoursesFilter";

const CoursesData = () => {
    return (<section className={"container relative"}>
        <CoursesFilter/>
        <CoursesContent/>
    </section>)
}

export default CoursesData;