import DashboardHome from "@/modules/Dashboard/dashboardHome/DashboardHome";
import {ScrollArea} from "@/components/ui/scroll-area";

const DashboardPage = () => {
    return(
        <>
            <ScrollArea className={"col-span-12 md:col-span-11 mt-14 h-[calc(100dvh-56px)]"}>
                <DashboardHome/>
            </ScrollArea>
        </>
    )
}

export default DashboardPage;