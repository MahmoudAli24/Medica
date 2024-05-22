import dynamic from "next/dynamic";
import {TypographyH3} from "@/components/typography/TypographyH3";
import {TypographyMuted} from "@/components/typography/TypographyMuted";
import {ScrollArea} from "@/components/ui/scroll-area";
import NavbarDashboard from "@/components/navbarDashboard/NavbarDashboard";
const DashboardUpcomingCourses = dynamic(()=>(import("@/modules/Dashboard/dashboardUpcoming/components/DashboardUpcomingCourses")));

const DashboardUpcoming = () => {
    return(
        <>
            <NavbarDashboard>
                <TypographyH3 className={"font-bold"}>Upcoming</TypographyH3>
                <TypographyMuted>Standard dummy text ever since the 1500s.</TypographyMuted>
            </NavbarDashboard>
            <ScrollArea className={`h-[calc(100dvh-125px)] pt-3 border-t-2`}>
                <DashboardUpcomingCourses/>
            </ScrollArea>
        </>
    )
}

export default DashboardUpcoming