import CoursesHead from "@/modules/courses/CoursesHead";
import CoursesData from "@/modules/courses/CoursesData";

const Courses = ({searchParams}) => {
    return (<main>
        <CoursesHead/>
        <CoursesData searchParams={searchParams}/>
    </main>)
}

export default Courses;