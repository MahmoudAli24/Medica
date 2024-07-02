import DashboardHome from "@/modules/Dashboard/dashboardHome/DashboardHome";
import {ScrollArea} from "@/components/ui/scroll-area";
import {getDictionary} from "@/app/[lang]/dictionaries";

const DashboardPage = async ({params : {lang}}) => {
    const dict = await getDictionary(lang)
    return(
        <>
            <ScrollArea dir={lang === "ar" ? "rtl" : "ltr"} className={"col-span-12 md:col-span-11 mt-14 h-[calc(100dvh-56px)]"}>
                <DashboardHome dict={dict}/>
            </ScrollArea>
        </>
    )
}

export default DashboardPage;