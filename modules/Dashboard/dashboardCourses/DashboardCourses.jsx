import dynamic from "next/dynamic";

import {ScrollArea} from "@/components/ui/scroll-area";
const NavbarDashboard = dynamic(() => import("@/components/navbarDashboard/NavbarDashboard"));
const DashboardCoursesFavorite = dynamic(()=>(import("@/modules/Dashboard/dashboardCourses/components/DashboardCoursesFavorite")),{loading:()=><DashboardCoursesLoading/> , ssr:false});
const DashboardCoursesRecommended = dynamic(()=>(import("@/modules/Dashboard/dashboardCourses/components/DashboardCoursesRecommended")),{loading:()=><DashboardCoursesLoading/> , ssr:false});
const DashboardCoursesMyCourses = dynamic(()=>(import("@/modules/Dashboard/dashboardCourses/components/DashboardCoursesMyCourses")),{loading:()=><DashboardCoursesLoading/> , ssr:false});
import {TypographyH3} from "@/components/typography/TypographyH3";
import {TypographyMuted} from "@/components/typography/TypographyMuted";
import DashboardCoursesLoading from "@/modules/Dashboard/dashboardCourses/components/DashboardCoursesLoading";

const DashboardCourses = () => {
    return (
        <>
            <NavbarDashboard>
                <TypographyH3 className={"font-bold"}>Courses</TypographyH3>
                <TypographyMuted>Standard dummy text ever since the 1500s.</TypographyMuted>
            </NavbarDashboard>
            <ScrollArea className={`h-[calc(100dvh-122px)] pt-3 border-t-2`}>
                <DashboardCoursesMyCourses/>
                <DashboardCoursesFavorite/>
                <DashboardCoursesRecommended/>
            </ScrollArea>
        </>
    )
}

export default DashboardCourses;