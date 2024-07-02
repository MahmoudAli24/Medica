import dynamic from "next/dynamic";
import {ScrollArea} from "@/components/ui/scroll-area";
const NavbarDashboard = dynamic(() => import("@/components/navbarDashboard/NavbarDashboard"));
const DashboardCoursesFavorite = dynamic(()=>(import("@/modules/Dashboard/dashboardCourses/components/DashboardCoursesFavorite")),{loading:()=><DashboardCoursesLoading/> , ssr:false});
const DashboardCoursesRecommended = dynamic(()=>(import("@/modules/Dashboard/dashboardCourses/components/DashboardCoursesRecommended")),{loading:()=><DashboardCoursesLoading/> , ssr:false});
const DashboardCoursesMyCourses = dynamic(()=>(import("@/modules/Dashboard/dashboardCourses/components/DashboardCoursesMyCourses")),{loading:()=><DashboardCoursesLoading/> , ssr:false});
import {TypographyH3} from "@/components/typography/TypographyH3";
import {TypographyMuted} from "@/components/typography/TypographyMuted";
import DashboardCoursesLoading from "@/modules/Dashboard/dashboardCourses/components/DashboardCoursesLoading";

const DashboardCourses = ({dict, lang}) => {
    return (
        <>
            <NavbarDashboard>
                <TypographyH3 className={"font-bold"}>{dict.dashboardCourses.title}</TypographyH3>
                <TypographyMuted>{dict.dashboardCourses.subtitle}</TypographyMuted>
            </NavbarDashboard>
            <ScrollArea dir={lang === "ar" ? "rtl" : "ltr"} className={`h-[calc(100dvh-122px)] pt-3 border-t-2`}>
                <DashboardCoursesMyCourses dict={dict}/>
                <DashboardCoursesFavorite dict={dict}/>
                <DashboardCoursesRecommended dict={dict}/>
            </ScrollArea>
        </>
    )
}

export default DashboardCourses;
