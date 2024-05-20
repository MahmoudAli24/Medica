import Sidebar from "@/components/sidebar/Sidebar";
import {ScrollArea} from "@/components/ui/scroll-area";

export default function DashboardLayout({children}) {
    return <main className={"container grid grid-cols-12 gap-5"}>
        <Sidebar/>
        {children}
    </main>
}