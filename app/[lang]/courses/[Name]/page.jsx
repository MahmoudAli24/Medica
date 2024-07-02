
import Course from "@/modules/course/Course";
import {getDictionary} from "@/app/[lang]/dictionaries";

const CoursePage = async ({params})=>{
    const {Name ,lang} = params
    const dict = await getDictionary(lang);
    const formattedName = Name.replaceAll('-', ' ');
    // const course = await fetchCourseByName(formattedName)
    // console.log(course)
    return(
        <Course dict={dict}/>
    )
}
export default CoursePage;