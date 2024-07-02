import Courses from "@/modules/courses/Courses";
import {getDictionary} from "@/app/[lang]/dictionaries";

const coursesPage = async ({searchParams , params:{lang}}) => {
    const dict = await getDictionary(lang);
    return <Courses dict={dict} searchParams={searchParams}/>
}

export default coursesPage;