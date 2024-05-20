import dynamic from 'next/dynamic'
import DashboardHomePopularCourses from "@/modules/Dashboard/dashboardHome/components/DashboardHomePopularCourses";

const DashboardHomeHeader = dynamic(()=> import("@/modules/Dashboard/dashboardHome/components/DashboardHomeHeader"));
const DashboardCurrentStudy = dynamic(()=> import("@/modules/Dashboard/dashboardHome/components/DashboardCurrentStudy"));
const DashboardHomeLatestStudy = dynamic(()=> import("@/modules/Dashboard/dashboardHome/components/DashboardHomeLatestStudy"));

const DashboardHome = () => {
    return(
        <>
            <DashboardHomeHeader/>
            <DashboardCurrentStudy/>
            <DashboardHomeLatestStudy/>
            <DashboardHomePopularCourses/>
        </>
    )
}

export default DashboardHome;