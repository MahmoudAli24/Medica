import {fetchCourseByName} from "@/app/actions/coursesActions";
import Course from "@/modules/course/Course";

const CoursePage = async ({params})=>{
    const {Name} = params
    const formattedName = Name.replaceAll('-', ' ');
    const course = await fetchCourseByName(formattedName)
    console.log(course)
    return(
        <Course/>
    )
}
export default CoursePage;