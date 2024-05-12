import CoursesContent from "@/modules/courses/CoursesContent";
import CoursesFilter from "@/modules/courses/CoursesFilter";

const CoursesData = ({searchParams}) => {
    return (<section className={"container relative"}>
        <CoursesFilter/>
        <CoursesContent searchParams={searchParams}/>
    </section>)
}

export default CoursesData;