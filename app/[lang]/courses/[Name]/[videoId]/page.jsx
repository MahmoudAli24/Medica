import CourseVideoModule from "@/modules/CourseVideoPage/CourseVideoModule";
import {getDictionary} from "@/app/[lang]/dictionaries";

const CourseVideoPage = async ({params:{lang}})=>{
    const dict = await getDictionary(lang)
    return(
        <CourseVideoModule dict={dict}/>
    )
}

export default CourseVideoPage