import DashboardCourses from "@/modules/Dashboard/dashboardCourses/DashboardCourses";
import {getDictionary} from "@/app/[lang]/dictionaries";

const CoursesDashboardPage = async ({params:{lang}})=>{
    const dict = await getDictionary(lang)
    return(
        <div className={"col-span-12 md:col-span-11 mt-14 w-full"}>
            <DashboardCourses lang={lang} dict={dict}/>
        </div>
    )
}

export default CoursesDashboardPage;