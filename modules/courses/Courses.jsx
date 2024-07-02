import CoursesHead from "@/modules/courses/CoursesHead";
import CoursesData from "@/modules/courses/CoursesData";

const Courses = ({searchParams , dict}) => {
    return (<main>
        <CoursesHead dict={dict}/>
        <CoursesData dict={dict} searchParams={searchParams}/>
    </main>)
}

export default Courses;